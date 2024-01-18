/*
 * File: /src/hooks/useSearch.tsx
 * Created Date: Wednesday, January 17th 2024
 * Author: Nathan Coquelin
 * -----
 * Last Modified: Thu Jan 18 2024
 * Modified By: Nathan Coquelin
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	--------------------------------
 */

import React from 'react';

import { UserCardI } from '@interfaces/UserCardI';
import { useEffect, useState } from 'react';
import { default as data } from '@data/data.json';
import { wait } from '@utils/wait';

const useSearch = () => {
  const [users, setUsers] = useState<UserCardI[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserCardI[]>([]);
  const [search, setSearch] = useState<string>('');
  const [isLoading, setIsLoading] = useState<
    'empty' | 'loading' | 'loaded' | 'writting'
  >('empty');
  const [suggestions, setSuggestions] = useState<
    { type: string; suggestion: string; distance: number }[]
  >([]);
  const [isSuggestionOpen, setIsSuggestionOpen] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<UserCardI | null>(null);

  let timer: ReturnType<typeof setTimeout>;
  const resetTimer = () => {
    clearTimeout(timer);
  };

  const handleSearch = async () => {
    setIsLoading('loading');
    searchUsers(search, users);
    await wait(1000);
    setIsLoading('loaded');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    resetTimer();
    setIsSuggestionOpen(true);
    setIsLoading('writting');
    setSearch(e.target.value);
    handleSearch();
  };

  const levenshteinDistance = (s: string, t: string) => {
    if (!s.length) return 0;
    if (!t.length) return s.length;
    const arr = [];
    for (let i = 0; i <= t.length; i++) {
      arr[i] = [i];
      for (let j = 1; j <= s.length; j++) {
        arr[i][j] =
          i === 0
            ? j
            : Math.min(
                arr[i - 1][j] + 1,
                arr[i][j - 1] + 1,
                arr[i - 1][j - 1] + (s[j - 1] === t[i - 1] ? 0 : 1)
              );
      }
    }
    return arr[t.length][s.length];
  };

  const searchUsers = (query: string, haystack: UserCardI[]) => {
    const minDist = 4;

    if (haystack.length === 0) return;

    const distances: {
      user: UserCardI;
      distance: number;
      distances: {
        agence: number;
        equipe: number;
        nom: number;
        prenom: number;
        poste: number;
        [key: string]: number;
      };
    }[] = haystack.map((item) => ({
      user: item,
      distance: Math.min(
        levenshteinDistance(query.toLowerCase(), item.agence.toLowerCase()),
        levenshteinDistance(query.toLowerCase(), item.equipe.toLowerCase()),
        levenshteinDistance(query.toLowerCase(), item.nom.toLowerCase()),
        levenshteinDistance(query.toLowerCase(), item.prenom.toLowerCase()),
        levenshteinDistance(query.toLowerCase(), item.poste.toLowerCase())
      ),
      distances: {
        agence: levenshteinDistance(
          query.toLowerCase(),
          item.agence.toLowerCase()
        ),
        equipe: levenshteinDistance(
          query.toLowerCase(),
          item.equipe.toLowerCase()
        ),
        nom: levenshteinDistance(query.toLowerCase(), item.nom.toLowerCase()),
        prenom: levenshteinDistance(
          query.toLowerCase(),
          item.prenom.toLowerCase()
        ),
        poste: levenshteinDistance(
          query.toLowerCase(),
          item.poste.toLowerCase()
        ),
      },
    }));

    const newFilteredUsers: UserCardI[] = distances
      .filter((user) => {
        return user.distance <= minDist;
      })
      .sort((a, b) => a.distance - b.distance)
      .map((item) => {
        return item.user;
      });

    const newSuggestions = Object.keys(distances[0].distances).reduce(
      (suggestions, type) => {
        const relevantSuggestions = distances
          .filter((item) => item.distances[type] < minDist)
          .sort((a, b) => a.distances[type] - b.distances[type])
          .map((item) => ({
            type,
            suggestion: item.user[type] as string,
            distance: item.distances[type],
          }));

        return [...suggestions, ...relevantSuggestions];
      },
      [] as { type: string; suggestion: string; distance: number }[]
    );

    const uniqueSuggestionsArray = newSuggestions
      .filter(
        (val, index, arr) =>
          index ===
          arr.findIndex(
            (item) =>
              item.type === val.type && item.suggestion === val.suggestion
          )
      )
      .sort((a, b) => a.distance - b.distance);

    setSuggestions(uniqueSuggestionsArray);

    setFilteredUsers(newFilteredUsers);
  };

  useEffect(() => {
    resetTimer();
    timer = setTimeout(() => handleSearch(), 700);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/employees');
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
        setIsLoading('loaded'); // Set loading state after successful data fetch
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getUsers();
  }, []);

  return {
    filteredUsers,
    searchUsers,
    search,
    setSearch,
    isLoading,
    handleInputChange,
    suggestions,
    isSuggestionOpen,
    setIsSuggestionOpen,
    currentUser,
    setCurrentUser,
  };
};

export default useSearch;
