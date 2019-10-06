import { createStore, compose,  applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    rootReducer,
    /* preloadedState, */  
    composeEnhancer(applyMiddleware(reduxThunk)));

store.subscribe(() => console.log(store.getState()))

export default store;