import { 
  ACTIVE_EMAIL,
  FAVORITE_EMAILS
} from '../actionTypes';

const initialState = {
  openedEmail: {},
  favoriteEmails: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const {type, data} = action;

  switch (type) {
    case ACTIVE_EMAIL:
      return {
        ...state,
        openedEmail: data,
      };
    case FAVORITE_EMAILS:
      return {
        ...state,
        favoriteEmails: data,
      };
    default:
      return state
  }
}
