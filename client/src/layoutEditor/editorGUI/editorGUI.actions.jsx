
import { UPDATE_COMPONENTS, SELECT_COMPONENT, EDIT_COMPONENT } from "../../reducers/actionTypes";

export const updateComponent = content => ({
    type: UPDATE_COMPONENTS,
    payload: {
        content
    }
});

export const selectComponent = content => ({
    type: SELECT_COMPONENT,
    payload: {
        content
    }
});

export const editComponent = content => ({
    type: EDIT_COMPONENT,
    payload: {
        content
    }
});