import appReducer from './reducer';
import {createStore} from "redux";

const store = createStore(appReducer);

export default store;
