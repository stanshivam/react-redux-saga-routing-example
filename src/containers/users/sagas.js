import { fork, take, put, call } from 'redux-saga/effects';
import { GET_USERS } from './constants';
import { getUsersFailure, getUsersSuccess } from './actions';
import { userService } from './service';

function* watchGetUsers() {
  while (true) {
    yield take(GET_USERS);
    try {
      const res = yield call(userService.getUsers);
      const users = yield res.json();
      yield put(getUsersSuccess(users.data));
    } catch (err) {
      yield put(getUsersFailure(err));
    }
  }
}

export default function* root() {
  yield fork(watchGetUsers);
}
