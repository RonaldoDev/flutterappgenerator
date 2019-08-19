import { ADD_COMPONENT } from "../../reducers/actionTypes";

export const addComponent = content => ({
    type: ADD_COMPONENT,
    payload: {
        content
    }
});