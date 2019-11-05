import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAILURE } from './constants';

export const getUsers = () => ({
  type: GET_USERS
});

export const getUsersSuccess = users => ({
  type: GET_USERS_SUCCESS,
  users
});

export const getUsersFailure = err => ({
  type: GET_USERS_FAILURE,
  err
});
