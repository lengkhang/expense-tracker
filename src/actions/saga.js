import { put, takeLatest } from 'redux-saga/effects';
import { USER_LOADED } from '../constants/user';
import { APPLICATION_LOADED } from '../constants/application';

function* fetchData() {
  try {
    const response = yield fetch('https://reqres.in/api/users', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });

    const data = yield response.json();

    yield put({type: USER_LOADED, data});
  } catch (err) {
    console.log('==> err:', err);
    yield put({type: 'FETCH_FAILED', message: err.message});
  }
}

export function* fetchAllData() {
  yield takeLatest(APPLICATION_LOADED, fetchData);
}