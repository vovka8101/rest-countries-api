import { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import { useAppDispatch } from "../app/hooks";
import { Theme } from '../types/types';
import { setTheme } from '../features/theme/themeSlice';

export const useThemeSetup = () => {
  const isLightPreferred = window.matchMedia("(prefers-color-scheme: light)").matches;
  const initialTheme = isLightPreferred ? "light" : "dark";
  const [savedTheme, setSavedTheme] = useLocalStorage<Theme["value"]>("theme", initialTheme);

  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    const newTheme = savedTheme === "dark" ? "light" : "dark";
    setSavedTheme(newTheme);
  }

  useEffect(() => {
    dispatch(setTheme(savedTheme));
  }, [savedTheme, dispatch]);

  return { savedTheme, toggleTheme };
};