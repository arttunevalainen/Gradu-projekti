import React from 'react';
import './GridColumn.css';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
            <AppBar position="static">
                <Toolbar className="toolbar-top">
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

            <Grid container spacing={2}>
                {gridRow}
            </Grid>
        </div>
    );
}

export default MovieGrid;
