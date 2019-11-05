import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAILURE } from './constants';

const initialState = {
  isLoading: false,
  users: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        isLoading: true
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
        isLoading: false
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default userReducer;
