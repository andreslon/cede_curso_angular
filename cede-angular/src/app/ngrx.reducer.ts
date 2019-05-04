import { Data } from './ngrx.model';


export const ADD_DATA = "ADD_DATA";

export function ngrxReducer(state: Data[] = [], action) { 
    switch (action.type) {
        case ADD_DATA:
            return [...state, action.payload];
        default:
            return state;
    } 
}