import { PropsWithChildren } from 'react';
import { ThemeProvider } from './UI/ThemeContext';

interface ProvidersProps {}
export const Providers = ({ children }: PropsWithChildren<ProvidersProps>) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
