import { createContext } from 'react'; 


export interface UiContextProps {
    tiping: string; 
    isLoading: boolean;
    
    setTiping: (value: string) => void;
    startLoading: () => void;
    stopLoading: () =>void; 
}

export const UiContext = createContext({} as UiContextProps); 