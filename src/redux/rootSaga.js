import { all } from 'redux-saga/effects';
import userSagas from '../containers/users/sagas';

export default function* rootSaga() {
  yield all([userSagas()]);
}
