import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import RecentlyRated from './components/RecentlyRated';
import AppMenu from './components/AppMenu';

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

            <BrowserRouter>
                <Switch>
                    <Route path="/recentlyrated">
                        <RecentlyRated/>
                    </Route>
                    <Route path="/mymovies">
                        lol3
                    </Route>
                    <Route path="/">
                        lol
                    </Route>
                </Switch>

                <AppMenu
                    anchorEl={anchorEl}
                    handleClose={handleClose}
                />
            </BrowserRouter>
        </>
    );
}

export default App;
