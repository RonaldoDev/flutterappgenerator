
import { UPDATE_COMPONENTS } from "../../reducers/actionTypes";

export const updateComponent = content => ({
    type: UPDATE_COMPONENTS,
    payload: {
        content
    }
});