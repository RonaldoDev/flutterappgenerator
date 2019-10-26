import { SELECT_TAB } from "../../reducers/actionTypes";


export const selectTab = content => ({
    type: SELECT_TAB,
    payload: {
        content
    }
});
