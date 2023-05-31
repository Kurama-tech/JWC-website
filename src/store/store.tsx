import { fetchHomeData, fetchItemsData, fetchTables } from '@/requests/requests';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { setDataChild, setDataParents, trimChild } from './utils';

type AppStateType = {
  homedata: any[];
  items: any[];
  childItems: any[];
  childHome: any[];
  mainHome: any[];
  mainItems: any[];
  Tables: any[];
};

const initialState: AppStateType = {
  homedata: [],
  items: [],
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

export const AppProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<AppStateType>(initialState);

  let HomeData: any[] = []
  let Tables: any[] = []

  useEffect(() => {
    fetchHomeData().then((resp)=>{
        if(resp != null){
            HomeData = resp
        }
    })
    fetchTables().then((resp) => {
        if(resp != null){
            Tables = resp
        }
    })
    fetchItemsData().then((resp)=>{
        if(resp != null){
             setState({ ...state, items: resp,
                homedata:  HomeData,
                childItems: setDataChild(resp), 
                mainItems: setDataParents(resp), 
                Tables: Tables,
                childHome: trimChild(setDataChild(resp)),
                mainHome: trimChild(setDataParents(resp))
             });
            
        }
    })
  }, []);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};
