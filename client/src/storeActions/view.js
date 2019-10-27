import { ADD_VIEW, SAVE_VIEWS, CHANGE_THEME } from "../reducers/actionTypes";

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

export const changeTheme = content => ({
    type: CHANGE_THEME,
    payload: {
        content
    }
});