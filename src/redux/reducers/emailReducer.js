import { 
  ACTIVE_EMAIL,
  SET_FAVORITE,
  DELETE_FAVORITE
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
    case SET_FAVORITE:
      return {
        ...state,
        favoriteEmails: [...state.favoriteEmails, data],
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        favoriteEmails: state.favoriteEmails.filter((item) => item !== data),
      };
    default:
      return state
  }
}
