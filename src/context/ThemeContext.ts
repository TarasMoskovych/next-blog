import { createContext, useContext } from 'react';

export interface ThemeContextApi {
  loaded: boolean;
  darkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextApi>({} as ThemeContextApi);
export const useTheme = (): ThemeContextApi => useContext(ThemeContext);
