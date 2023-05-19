import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { ThemeContext, ThemeContextApi } from 'src/context/ThemeContext';
import { ThemeService } from 'src/services/theme.service';

type Props = {
  children: JSX.Element;
};

const ThemeProvider = ({ children }: Props) => {
  const router = useRouter();
  const [theme, setTheme] = useState({ value: ThemeService.getTheme(), loaded: false });

  const themeAPI: ThemeContextApi = useMemo(() => {
    const toggleTheme = () => {
      const newTheme = ThemeService.getNewTheme(theme.value);

      setTheme({ ...theme, value: newTheme });
      setTimeout(() => ThemeService.applyTheme(newTheme, true), 0);
    };

    return {
      loaded: theme.loaded,
      darkMode: ThemeService.isDarkMode(theme.value),
      toggleTheme,
    };
  }, [theme]);

  useEffect(() => {
    setTheme({ value: ThemeService.getTheme(), loaded: true });
  }, []);

  useEffect(() => {
    ThemeService.applyTheme(theme.value, false);
  }, [router.query]);

  return (
    <ThemeContext.Provider value={themeAPI}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
