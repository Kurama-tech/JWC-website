import { fetchHomeData, fetchItemsData, fetchTables } from '@/requests/requests';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { setDataChild, setDataParents, trimChild } from './utils';

type AppStateType = {
  homedata: any[];
  items: any[];
  itemsHome: any[];
  childItems: any[];
  childHome: any[];
  mainHome: any[];
  mainItems: any[];
  Tables: any[];
};

const initialState: AppStateType = {
  homedata: [],
  items: [],
  itemsHome: [],
  childItems: [],
  childHome: [],
  mainHome: [],
  mainItems: [],
  Tables: [],
};

const AppContext = createContext<{
  state: AppStateType;
  setState: React.Dispatch<React.SetStateAction<AppStateType>>;
}>({
  state: initialState,
  setState: () => {},
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }: any) => {
  const [state, setState] = useState<AppStateType>(initialState);

  

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};
