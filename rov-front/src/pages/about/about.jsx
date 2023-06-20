import React from "react";
import { Typography, Container } from '@material-ui/core'

import Header from '../../components/header/header'
import useStyles from './styles'

const About = () => {
    const classes = useStyles();

    return (
        <>
            <Header />
            <div>
                About
            </div>
        </>
    )
}

export default About;