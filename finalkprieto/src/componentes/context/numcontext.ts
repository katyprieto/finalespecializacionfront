import  { createContext } from "react";

export interface HistoryType {
   
    bottonReset:boolean;
    setBottonReset: (value: boolean) => void;
  }

export const NumContext = createContext<HistoryType | undefined>(undefined);
