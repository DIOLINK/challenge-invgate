import { PropsWithChildren } from 'react'
import { ThemeProvider } from './ThemeContext'

interface ProvidersProps {}
export const Providers = ({ children }: PropsWithChildren<ProvidersProps>) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
