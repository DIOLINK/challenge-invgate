import { PropsWithChildren } from 'react';
import { ThemeProvider } from './UI/ThemeContext';
import { UIProvider } from './UI/UIProvider';

interface ProvidersProps {}
export const Providers = ({ children }: PropsWithChildren<ProvidersProps>) => {
  return (
    <ThemeProvider>
      <UIProvider>{children}</UIProvider>
    </ThemeProvider>
  );
};
