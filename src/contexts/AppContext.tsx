import { createContext } from "react";

interface AppContextType {
  test: string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export default AppContext;
