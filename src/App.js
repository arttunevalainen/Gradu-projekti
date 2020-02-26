import React, {useState} from 'react';

import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import RecentlyRated from './components/RecentlyRated';

const App = props => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar className="toolbar-top">
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
                    <MenuIcon/>
                </IconButton>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

            <AppMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
            />
        
            <RecentlyRated/>
        </>
    );
}

const AppMenu = ({anchorEl, handleClose}) => {
    return (
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>Frontpage</MenuItem>
            <MenuItem onClick={handleClose}>Recently Rated Movies</MenuItem>
            <MenuItem onClick={handleClose}>My rated movies</MenuItem>
        </Menu>
    );
}

export default App;
