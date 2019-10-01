import { createStore , applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers";

let store = createStore(
    rootReducer,
    /* preloadedState, */  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(reduxThunk));

store.subscribe(() => console.log(store.getState()))

export default store;