/*
 * File: /src/context/ThemeProvider.tsx
 * Created Date: Thursday, January 18th 2024
 * Author: Nathan Coquelin
 * -----
 * Last Modified: Thu Jan 18 2024
 * Modified By: liber4lis
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	--------------------------------
 */

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeProperties {
  '--color-bg': string;
  '--color-text': string;
  '--color-accent-1': string;
  '--color-accent-2': string;
}

const lightTheme: ThemeProperties = {
  '--color-bg': '#fafafa',
  '--color-text': '#1f1f1f',
  '--color-accent-1': '#d5d5d5',
  '--color-accent-2': '#f7f7f7',
};

const darkTheme: ThemeProperties = {
  '--color-bg': '#1f1f1f',
  '--color-text': '#fafafa',
  '--color-accent-1': '#3f3f3f',
  '--color-accent-2': '#2b2b2b',
};

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    const root: HTMLElement = document.documentElement;

    if (theme === 'dark') {
      Object.entries(darkTheme).forEach(([property, value]) => {
        root.style.setProperty(property, value);
      });
    } else {
      Object.entries(lightTheme).forEach(([property, value]) => {
        root.style.setProperty(property, value);
      });
    }

    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log(theme);
  };

  const contextValue: ThemeContextProps = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
