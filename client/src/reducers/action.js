import { FETCH_VIEWS } from './actionTypes';
import { viewsRef } from '../firebase';

export const fetchViews = uid => async dispatch => {
    viewsRef.child(uid).on("value", snapshot => {
       return  snapshot.val() ?
        dispatch({
        type: FETCH_VIEWS,
        payload: JSON.parse(snapshot.val().views) 
      }) : null;
    });
  };