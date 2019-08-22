import { ADD_VIEW } from "../../reducers/actionTypes";

let id = 0
export const addView = content => ({
    type: ADD_VIEW,
    payload: {
        id: ++id,
        content
    }
});