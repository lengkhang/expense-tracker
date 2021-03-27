// import axios from "axios";
import { call, put, takeLatest } from 'redux-saga/effects';

export function* fetchAllSubjects() {
  yield takeLatest('GET_ALL_SUBJECTS', fetchData);
 }

 function* fetchData(path='https://reqres.in/api/users') {
   try {
     const response = yield fetch('https://reqres.in/api/users', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
       'Content-Type': 'application/json',
      }
    });

    const data = yield response.json();

    yield put({type: 'RECEIVED_SUBJECTS', data});
   } catch (err) {
     console.log('==> err:', err);
    yield put({type: 'FETCH_FAILED', message: err.message});
   }
 }