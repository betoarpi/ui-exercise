import { ACTIVE_EMAIL } from './actionTypes';

export function setActiveEmail(data) {
  return function(dispatch) {
    return dispatch({
      type: ACTIVE_EMAIL,
      data: data
    })
  }
}