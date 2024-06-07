import { THEME } from '@/helpers';
import { useLocalState } from '@/hooks/useLocalStorage';
import { ThemeProvider as ThemeBootstrapProvider } from 'react-bootstrap';

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [value, setValue] = useLocalState('theme', THEME.light);
  const [theme, setTheme] = useState(value);
  useEffect(() => {
    document.body.setAttribute(THEME.dataTheme, theme);
  }, []);

  const toggleTheme = () => {
    setTheme((oldTheme) => THEME.changeMode(oldTheme));
    document.body.setAttribute(THEME.dataTheme, THEME.changeMode(theme));
    setValue(THEME.changeMode(theme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeBootstrapProvider
        breakpoints={['xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
        minBreakpoint="xs"
      >
        {children}
      </ThemeBootstrapProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
