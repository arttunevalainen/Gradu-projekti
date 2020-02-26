import { all } from 'redux-saga/effects';
import movieSagas from './sagas/movieSagas';

export default function* rootSaga() {
    yield all([
        movieSagas()
    ]);
};