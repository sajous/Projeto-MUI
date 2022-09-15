import { createContext, useCallback, useContext, useState } from 'react';


interface IThemeContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
}

const DrawerContext = createContext({} as IThemeContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

interface IDrawerContextProp {
    children : React.ReactNode;
}
export const DrawerProvider: React.FC<IDrawerContextProp> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, []);


  return (
    <DrawerContext.Provider value={{  isDrawerOpen, toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};