import { useEffect, useState } from 'react';

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export const useThemeToggle = () => {
  const sessionKey = 'nb:dark-theme';
  const [darkMode, setDarkMode] = useState(false);
  const onThemeChange = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.documentElement.setAttribute('theme', darkMode ? Theme.DARK : Theme.LIGHT);

  }, [darkMode]);

  return {
    darkMode,
    onThemeChange,
  };
};
