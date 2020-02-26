import { all } from 'redux-saga/effects';
import testSagas from './sagas/testSagas';

export default function* rootSaga() {
    yield all([
        testSagas()
    ]);
};