import { createContext, useContext, useState } from "react";

// create context
export interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>(null)
ThemeContext.displayName = "ThemeProvider"

interface IThemeProvider {
  children: React.ReactNode
}

// create provider
export function ThemeProvider({ children }: IThemeProvider) {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme(prevValue => prevValue === "light" ? "dark" : "light")
  }
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>
    {children}
  </ThemeContext.Provider>
}
// Might provide a custom hook ... 

export function useTheme() {
  const context = useContext(ThemeContext) as IThemeContext;
  if (context === null) {
    throw new Error("useTheme must be used inside a provider")
  }
  return context;
}