/*
 * File: /src/hooks/useSearchLoading.tsx
 * Created Date: Monday, January 15th 2024
 * Author: Nathan Coquelin
 * -----
 * Last Modified: Mon Jan 15 2024
 * Modified By: Nathan Coquelin
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	--------------------------------
 */

import { useState, useEffect } from 'react';

import { wait } from '@utils/index';

function useSearchLoading({
  initialValue,
}: {
  initialValue: 'empty' | 'loading' | 'loaded' | 'writting';
}) {
  const [isLoading, setIsLoading] = useState(initialValue);
  const [inputValue, setInputValue] = useState('');

  let timer: ReturnType<typeof setTimeout>;
  const resetTimer = () => {
    clearTimeout(timer);
  };
  const handleSearch = async () => {
    setIsLoading('loading');
    await wait(1000);
    setIsLoading('loaded');
  };
  useEffect(() => {
    resetTimer();
    timer = setTimeout(handleSearch, 700);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading('writting');
    setInputValue(e.target.value);
    resetTimer();
  };

  return { isLoading, handleInputChange, inputValue, setInputValue };
}

export default useSearchLoading;
