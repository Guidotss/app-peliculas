import { FC, useReducer } from 'react'; 
import { UiContext,uiReducer } from './'



interface UiProviderProps {
    children: React.ReactNode; 
}


export interface UiState { 
    tiping: string;
    isLoading: boolean;

}

const UI_INITIAL_STATE: UiState =  { 
    tiping: '',
    isLoading: false
}


export const UiProvider:FC<UiProviderProps> = ({ children }) => {
    const [ state, dispatch ] = useReducer(uiReducer, UI_INITIAL_STATE);

    const setTiping = ( value: string ) => {
        dispatch({
            type: '[UI] - tiping',
            payload: value
        }); 
    }

    const startLoading = () => {
        dispatch({
            type: '[UI] - startLoading'
        });
    }

    const stopLoading = () => {
        dispatch({
            type: '[UI] - stopLoading'
        });
    }

    return ( 
        <UiContext.Provider value={{
            ...state,

            setTiping,
            startLoading,
            stopLoading
        }}>
            { children }
        </UiContext.Provider>
    )
}