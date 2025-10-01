import AppContext from "./AppContext";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const test = "Ok";
  return <AppContext.Provider value={{ test }}>{children}</AppContext.Provider>;
};

export default AppProvider;
