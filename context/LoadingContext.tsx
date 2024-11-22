import { createContext, useState } from 'react';

type ProviderProps = {
  children: React.ReactNode;
};

type ContextType = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const contextStateType = {
  isLoading: false,
  setIsLoading: () => false,
};

const LoadingContext = createContext<ContextType>(contextStateType);

const LoadingContextProvider = ({ children }: ProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingContext, LoadingContextProvider };
