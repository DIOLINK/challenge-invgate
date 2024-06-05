export const THEME = {
  dark: 'dark',
  light: 'light',
  dataTheme: 'data-bs-theme',
  changeMode(mode: string): string {
    return mode === this.light ? this.dark : this.light;
  },
  isDark(mode: string): boolean {
    return mode === this.dark;
  },
};

export const isEmpty = (array = []) => array.length === 0;

export const INIT_VALUE = {
  data: [],
  loading: true,
};

export const isFrontend = () => typeof window !== 'undefined';

export const getItemLocalStorage = <T>(key: string, initialValue: T): T => {
  try {
    if (isFrontend()) {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    }
  } catch (error) {
    console.error('Error getItemLocalStorage:', error);
  }
  return initialValue;
};
