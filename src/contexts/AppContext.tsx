import { createContext } from "react";

interface AppContextType {
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export default AppContext;
