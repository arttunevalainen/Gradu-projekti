import { put, call, takeLatest } from 'redux-saga/effects';
import actionTypes from '../actionTypes';
import {fetchRecentlyRatedMoviesSuccess} from '../actions';

function* fetchRecentlyRatedMovies() {
    const gridData = [
        {id: 1, name: "Fantasy movie", logo: null, date: "2020-02-03", tags: ["Fantasy"], intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis in lacus sit amet rhoncus. Fusce ut tellus nec purus cursus bibendum id vel lorem. Vestibulum tempus congue pretium. Curabitur ut erat eu est sollicitudin commodo.", rating: 5},
        {id: 2, name: "Romantic movie", logo: null, date: "2020-02-09", tags: ["Romance"], intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis in lacus sit amet rhoncus. Fusce ut tellus nec purus cursus bibendum id vel lorem. Vestibulum tempus congue pretium. Curabitur ut erat eu est sollicitudin commodo.", rating: 5},
        {id: 3, name: "Scifi movie", logo: null, date: "2020-02-12", tags: ["Scifi"], intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis in lacus sit amet rhoncus. Fusce ut tellus nec purus cursus bibendum id vel lorem. Vestibulum tempus congue pretium. Curabitur ut erat eu est sollicitudin commodo.", rating: 5},
        {id: 4, name: "Fantasy movie", logo: null, date: "2020-02-03", tags: ["Fantasy"], intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis in lacus sit amet rhoncus. Fusce ut tellus nec purus cursus bibendum id vel lorem. Vestibulum tempus congue pretium. Curabitur ut erat eu est sollicitudin commodo.", rating: 5},
        {id: 5, name: "Romantic movie", logo: null, date: "2020-02-09", tags: ["Romance"], intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis in lacus sit amet rhoncus. Fusce ut tellus nec purus cursus bibendum id vel lorem. Vestibulum tempus congue pretium. Curabitur ut erat eu est sollicitudin commodo.", rating: 5},
        {id: 6, name: "Scifi movie", logo: null, date: "2020-02-12", tags: ["Scifi"], intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis in lacus sit amet rhoncus. Fusce ut tellus nec purus cursus bibendum id vel lorem. Vestibulum tempus congue pretium. Curabitur ut erat eu est sollicitudin commodo.", rating: 5},
        {id: 7, name: "Fantasy movie", logo: null, date: "2020-02-03", tags: ["Fantasy"], intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis in lacus sit amet rhoncus. Fusce ut tellus nec purus cursus bibendum id vel lorem. Vestibulum tempus congue pretium. Curabitur ut erat eu est sollicitudin commodo.", rating: 5},
        {id: 8, name: "Romantic movie", logo: null, date: "2020-02-09", tags: ["Romance"], intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis in lacus sit amet rhoncus. Fusce ut tellus nec purus cursus bibendum id vel lorem. Vestibulum tempus congue pretium. Curabitur ut erat eu est sollicitudin commodo.", rating: 5},
        {id: 9, name: "Scifi movie", logo: null, date: "2020-02-12", tags: ["Scifi"], intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis in lacus sit amet rhoncus. Fusce ut tellus nec purus cursus bibendum id vel lorem. Vestibulum tempus congue pretium. Curabitur ut erat eu est sollicitudin commodo.", rating: 5},
    ];

    yield put(fetchRecentlyRatedMoviesSuccess(gridData));
}

export default function* movieSagas() {
    yield takeLatest(actionTypes.FETCH_RECENTLY_RATED_MOVIES_ACTION, fetchRecentlyRatedMovies);
}