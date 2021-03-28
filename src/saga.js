import { put, takeLatest } from 'redux-saga/effects';

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

    yield put({type: 'RECEIVED_SUBJECTS', data});
  } catch (err) {
    console.log('==> err:', err);
    yield put({type: 'FETCH_FAILED', message: err.message});
  }
}

export function* fetchAllSubjects() {
  yield takeLatest('GET_ALL_SUBJECTS', fetchData);
}