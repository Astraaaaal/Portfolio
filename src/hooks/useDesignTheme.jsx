import { createContext, useContext, useState, useEffect } from 'react';

const DesignThemeContext = createContext(['flat_design', () => {}]);

export function DesignThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('design-theme') || 'flat_design';
    } catch {
      return 'flat_design';
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('design-theme', theme);
  }, [theme]);

  return (
    <DesignThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </DesignThemeContext.Provider>
  );
}

export function useDesignTheme() {
  return useContext(DesignThemeContext);
}
