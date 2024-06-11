import { PropsWithChildren } from 'react';
import { TODOContextProvider } from './TODOContext';
import { ThemeProvider } from './UI/ThemeContext';
import { UIProvider } from './UI/UIProvider';

interface ProvidersProps {}
export const Providers = ({ children }: PropsWithChildren<ProvidersProps>) => {
  return (
    <ThemeProvider>
      <TODOContextProvider>
        <UIProvider>{children}</UIProvider>
      </TODOContextProvider>
    </ThemeProvider>
  );
};
