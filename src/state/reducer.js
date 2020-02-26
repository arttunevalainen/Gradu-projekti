import actionTypes from './actionTypes';

const initialState = {
    recentlyRatedMovies: {
        fetching: false,
        list: null
    }
};

const movies = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_RECENTLY_RATED_MOVIES_ACTION:
            return {
                ...state,
                recentlyRatedMovies: {
                    fetching: true,
                    list: []
                }
            }
        case actionTypes.FETCH_RECENTLY_RATED_MOVIES_SUCCESS:
            return {
                ...state,
                recentlyRatedMovies: {
                    fetching: false,
                    list: action.payload.gridData
                }
            };
        default:
            return state;
    };
};
export default movies;