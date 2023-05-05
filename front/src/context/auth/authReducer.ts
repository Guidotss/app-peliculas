import { User } from '@/interfaces';
import { AuthState } from './'; 



type AuthActionType = 
 | { type: '[AUTH] - Login', payload:User}
 | { type: '[AUTH] - Logout'}


export const authReducer = ( state: AuthState, action: AuthActionType ): AuthState => {
    switch(action.type){
        case '[AUTH] - Login': 
            return {
                ...state,
                user: {
                    ...action.payload
                },
                isAuth:true
            }
        case '[AUTH] - Logout':
            return {
                ...state,
                user: null,
                isAuth:false
            }
    }
}