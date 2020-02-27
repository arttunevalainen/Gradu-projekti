import actionTypes from './actionTypes';

export const fetchRecentlyRatedMoviesAction = data => {
    return {
        type: actionTypes.FETCH_RECENTLY_RATED_MOVIES_ACTION,
        payload: {data}
    }
};

export const fetchRecentlyRatedMoviesSuccess = (gridData) => {
    return {
        type: actionTypes.FETCH_RECENTLY_RATED_MOVIES_SUCCESS,
        payload: {gridData}
    }
};
