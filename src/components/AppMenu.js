import React from 'react';
import { Link } from "react-router-dom";

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const AppMenu = ({anchorEl, handleClose}) => {
    return (
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <Link to="/"><MenuItem onClick={handleClose}>Frontpage</MenuItem></Link>
            <Link to="/recentlyrated"><MenuItem onClick={handleClose}>Recently Rated Movies</MenuItem></Link>
            <Link to="/mymovies"><MenuItem onClick={handleClose}>My rated movies</MenuItem></Link>
        </Menu>
    );
};

export default AppMenu;
