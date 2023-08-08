import { createContext, ReactNode, useState } from 'react';

type UserContextType = {
  userName: string;
}

const initialValue: UserContextType = {
  userName: 'Matheusinho'
};

export const UserContext = createContext<UserContextType>(initialValue);

type UserContextProps = {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [userName] = useState<UserContextType['userName']>(initialValue.userName);

  return (
    <UserContext.Provider value={{ userName }}>
      {children}
    </UserContext.Provider>
  )
}