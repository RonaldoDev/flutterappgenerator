import { ADD_VIEW, SAVE_VIEWS } from "../reducers/actionTypes";

export const addView = content => ({
    type: ADD_VIEW,
    payload: {
        content
    }
});

export const saveViews = content => ({
    type: SAVE_VIEWS,
    payload: {
        content
    }
});