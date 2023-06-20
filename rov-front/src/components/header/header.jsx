import React from "react";
import { Typography, AppBar, CssBaseline, Toolbar } from '@material-ui/core';
import { Router } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Header = () => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <AppBar position="relative" classes={classes.appbar} style={{ background: '#2E3B55' }}>
                <Toolbar classes={classes.toolbar}>
                    <Router />
                    <Typography variant="h8">
                        <Link to="/" className={classes.link}>
                            ROV Tracking System
                        </Link>
                    </Typography>
                    <div className={classes.about}>
                        <Typography variant="h8">
                            <Link to="/about" className={classes.link}>
                                About
                            </Link>
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;
