import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    favorites: [],
    count: 0
}

const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITES':
            return {...state, favorites: [...state.favorites, action.payload]}
        case 'REMOVE_TO_FAVORITES':
            return {...state, favorites: [...state.favorites.filter(cat => cat.id !== action.payload)]}
        default:
            return state
    }
}

export const store = createStore(storeReducer,composeWithDevTools(
    applyMiddleware()
))