import { FC, useReducer } from 'react'; 
import Cookies from 'js-cookie';
import { AuthContext, authReducer } from './'; 
import { filmsApi } from '@/api';
import { User } from '@/interfaces';


interface AuthProviderProps { 
    children: React.ReactNode; 
}


export interface AuthState { 
    user: User | null;
    isAuth: boolean;
}


const AUTH_INITIAL_STATE: AuthState = {
    isAuth: false,
    user: {
        _id: "",
        mail: "",
        name: "",
        films: [],
        access_token:"",
    }
}


export const AuthProvider:FC<AuthProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer( authReducer, AUTH_INITIAL_STATE); 

    const login = async (email:string, password:string) => { 
        try{
            const { data } = await filmsApi.post<User>('/auth/login', { email, password });
            Cookies.set('token', data.access_token);
            dispatch({ type: '[AUTH] - Login', payload: data });
            return true; 
            
        }catch(error){
            console.log(error)
            Cookies.remove('token');
            dispatch({ type: '[AUTH] - Logout' });
        }
    }

    const registerUser = async (name:string, email:string, password:string):Promise<boolean | undefined > => {
        try{
            const { data } = await filmsApi.post<User>('/auth/register', { name, email,password }); 
            Cookies.set('token', data.access_token);
            dispatch({ type: '[AUTH] - Login', payload: data }); 
            return true;

        }catch(error){
            console.log(error); 
            Cookies.remove('token');
            dispatch({ type: '[AUTH] - Logout' });
            return false; 
        }
        return false;
    }

    return ( 
        <AuthContext.Provider value={{
            ...state,

            login,
            registerUser
        }}>
            { children }
        </AuthContext.Provider>
    )
}