import { FETCH_VIEWS } from './actionTypes';
import { viewsRef } from '../config/firebase';

export const fetchViews = uid => async dispatch => {
    viewsRef.child(uid).on("value", snapshot => {
      debugger; 
      return  snapshot.val() ?
        dispatch({
        type: FETCH_VIEWS,
        payload: { views: JSON.parse(snapshot.val().views), compId: snapshot.val().compId, theme: snapshot.val().theme } 
      }) : null;
    });
  };