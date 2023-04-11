import { Theme } from "@/shared/types";
import { createContext } from "react";

export const ThemeContext = createContext<Theme>('light');