import { UiState } from './'; 


type UiActionType = 
 | { type: '[UI] - tiping', payload: string }
 | { type: '[UI] - startLoading'}
 | { type: '[UI] - stopLoading' }


export const uiReducer = (state: UiState, action:UiActionType): UiState => {
    switch(action.type){
        case '[UI] - tiping':
            return {
                ...state,
                tiping: action.payload
            }
        case '[UI] - startLoading':
            return { 
                ...state, 
                isLoading: true
            }
        case '[UI] - stopLoading': 
            return { 
                ...state, 
                isLoading: false
            }
        default: 
            return state; 
    }    
}
