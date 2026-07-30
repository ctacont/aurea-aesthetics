import React, { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'aurea-theme';
const ThemeContext = createContext({ theme: 'classic', toggleTheme: () => {} });

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'classic';
    return window.localStorage.getItem(STORAGE_KEY) === 'prestige' ? 'prestige' : 'classic';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'classic' ? 'prestige' : 'classic'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);