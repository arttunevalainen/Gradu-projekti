import React from 'react';
import './GridColumn.css';
import Grid from '@material-ui/core/Grid';

import GridCard from './GridCard'

const MovieGrid = props => {
    const gridRow = props.gridData.map(d => {
        return (
            <GridCard
                xs={3}
                key={d.id}
                data={d}
            />
        );
    });

  return (
        <div>
            <Grid container spacing={2}>
                {gridRow}
            </Grid>
        </div>
    );
}

export default MovieGrid;
