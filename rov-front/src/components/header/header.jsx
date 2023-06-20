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
                    <Typography variant="h7" className={classes.typotitle}>
                        ROV Tracking System
                    </Typography>
                    {/* <Typography variant="h8" className={classes.typo}> */}
                        <Link to="/Dashboard"> 
                        <Typography variant="h8" className={classes.typo}>
                        About 
                            </Typography>
                            </Link>
                    {/* </Typography> */}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;
