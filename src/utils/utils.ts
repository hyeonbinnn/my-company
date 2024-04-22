import { NavigateFunction } from 'react-router-dom';

export const navigateTo = (navigate: NavigateFunction, path: string): void => {
  navigate(path);
};

export const scrollToTop = (): void => {
  window.scrollTo(0, 0);
};
