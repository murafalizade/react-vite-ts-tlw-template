import { SET_LANGUAGE } from './actions';
import {IAppState} from "../types/IAppState.ts";

const initialState: IAppState = {
    language: 'en',
};

const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload,
            };
        default:
            return state;
    }
};

export default appReducer;
