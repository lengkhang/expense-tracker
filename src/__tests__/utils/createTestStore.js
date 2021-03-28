import { createStore } from 'redux';
import rootReducer from '../../reducers/index';

export default function createTestStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState
  );

  return store;
}