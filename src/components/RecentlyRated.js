import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import { fetchRecentlyRatedMoviesAction } from '../state/actions';

import './RecentlyRated.css';

import CircularProgress from '@material-ui/core/CircularProgress';
import GridColumn from './GridColumn';

const Title = styled.h2`
    font-size: 26px;
    padding-bottom: 10px;
`;

const RecentlyRated = props => {
    const {list, isFetching} = props.recentlyRatedMovies;
    useEffect(() => {
        if(list == null) {
            props.fetchRecentlyRatedMovies();
        }
    });

    if(list == null || isFetching) {
        return  <CircularProgress/>;
    }
    
    return (
        <div className="recentlyrated-container">
            <Title>Recently rated</Title>
            <GridColumn
                gridData={list}
            />
        </div>
    )
};

const mapStateToProps = state => {
    const {recentlyRatedMovies} = state.movies;
    return {
        recentlyRatedMovies
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchRecentlyRatedMovies: () => dispatch(fetchRecentlyRatedMoviesAction()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecentlyRated);