import {
  ACTIVE_EMAIL,
  SET_FAVORITE,
  DELETE_FAVORITE
} from './actionTypes';

export function setActiveEmail(data) {
  return function(dispatch) {
    return dispatch({
      type: ACTIVE_EMAIL,
      data: data,
    })
  }
}

export function setFavoriteEmail(id) {
  return function(dispatch) {
    return dispatch({
      type: SET_FAVORITE,
      data: id,
    })
  }
}

export function deleteFavoriteEmail(id) {
  return function(dispatch) {
    return dispatch({
      type: DELETE_FAVORITE,
      data: id,
    })
  }
}