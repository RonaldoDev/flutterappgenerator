import { combineReducers } from "redux";
import component from './reducers';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({ component, form: formReducer });