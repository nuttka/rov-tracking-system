import React from "react";
import { Typography, Container } from '@material-ui/core'

import Header from '../../components/header/header'
import useStyles from './styles'
import DataTable from '../../components/table/table'

const Main = () => {
    const classes = useStyles();

    return (
        <>
            <Header />
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
                            <div className={classes.centerText}>
                                ROV Tracking System
                            </div>
                        </Typography>
                    </Container>
                    <DataTable />
                </div>
            </main>
        </>
    )
}

export default Main;