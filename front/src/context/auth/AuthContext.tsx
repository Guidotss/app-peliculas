import { User } from '@/interfaces';
import { createContext } from 'react'; 

interface AuthContextProps { 
    isAuth: boolean; 
    user: User | null; 

    login: (email:string, password:string) => Promise<boolean | undefined>;
    registerUser: ( name:string, email:string, password:string ) => Promise<boolean | undefined>;
}


export const AuthContext = createContext({} as AuthContextProps); 