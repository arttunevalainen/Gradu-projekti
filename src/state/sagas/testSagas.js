

import { takeLatest } from 'redux-saga/effects';

function* updateResource() {
  yield console.log('TEST saga is called!');
}

export default function* testSagas() {
    yield takeLatest('TEST', updateResource);
}