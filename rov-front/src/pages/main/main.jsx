import React from "react";
import { Typography, Container } from '@material-ui/core'

import Header from '../../components/header/header'
import useStyles from './styles'
import { Link } from 'react-router-dom';
import DataTable from "../../components/dataTable/dataTables";




const columns = [
  {
    field: 'as',
    headerName: 'AS',
    width: 150,
    editable: false,
  },
  {
    field: 'asname',
    headerName: 'AS Name',
    width: 750,
    editable: false,
  },
  {
    field: 'certainty',
    headerName: 'Certainty',
    description: 'Number of times AS was marked as filtering invalids, over the total number ofmeasurements',
    width: 150,
    editable: false,
  },
  {
    field: 'notes',
    headerName: 'Notes',
    width: 480,
    editable: false,
  },
  {
    field: 'details',
    headerName: 'Details',
    width: 160,
    renderCell: (params) => (
      <Link to={`/details/${params.getValue(params.id, 'as')}`} style={{ textDecoration: 'none' }}>
        Details
      </Link>
    ),
  }
];

const rows = [
    { id: 1, as: 49709, asname: 'GITOYEN-MAIN-AS The main Autonomous System of Gitoyen (Paris, France)., FR', certainty: '1', notes: 'Using ROV@AMS-IX Route Server and Deployed ROV in AS' },
    { id: 2, as: 12321, asname: 'VIDEOBYTE, IT', certainty: '0.92922', notes: 'Using ROV@AMS-IX Route Server and Deployed ROV in AS' },
    { id: 3, as: 346345, asname: 'GITOYEN-MAIN-AS The main Autonomous System of Gitoyen (Paris, France)., FR', certainty: '0.92922', notes: 'Using ROV@AMS-IX Route Server and Deployed ROV in AS' },
    { id: 4, as: 12312, asname: 'VIDEOBYTE, IT', certainty: '0.92922', notes: 'Using ROV@AMS-IX Route Server and Deployed ROV in AS' },
    { id: 5, as: 12321, asname: 'HURRICANE - Hurricane Electric, Inc., US', certainty: '0.92922', notes: 'Using ROV@AMS-IX Route Server and Deployed ROV in AS' },
    { id: 6, as: 54325643, asname: 'VIDEOBYTE, IT', certainty: '0.92922', notes: 'Using ROV@AMS-IX Route Server and Deployed ROV in AS' },
    { id: 7, as: 5647, asname: 'ANYCAST-GLOBAL-BACKBONE Anycast Global Backbone, AU', certainty: '0.92922', notes: 'Using ROV@AMS-IX Route Server and Deployed ROV in AS' },
    { id: 8, as: 456, asname: 'ANYCAST-GLOBAL-BACKBONE Anycast Global Backbone, AU', certainty: '0.92922', notes: 'Using ROV@AMS-IX Route Server and Deployed ROV in AS' },
    { id: 9, as: 23423, asname: 'VIDEOBYTE, IT', certainty: '0.92922', notes: 'Using ROV@AMS-IX Route Server and Deployed ROV in AS' },
    { id: 10, as: 67777, asname: 'VIDEOBYTE, IT', certainty: '0.92922', notes: 'Using ROV@AMS-IX Route Server and Deployed ROV in AS' },
    { id: 11, as: 453654, asname: 'ANYCAST-GLOBAL-BACKBONE Anycast Global Backbone, AU', certainty: '0.92922', notes: 'Using ROV@AMS-IX Route Server and Deployed ROV in AS' },
    { id: 12, as: 34543, asname: 'VIDEOBYTE, IT', certainty: '0.92922', notes: 'Using ROV@AMS-IX Route Server and Deployed ROV in AS' },
    { id: 13, as: 2323423, asname: 'VIDEOBYTE, IT', certainty: '0.92922', notes: 'Using ROV@AMS-IX Route Server and Deployed ROV in AS' },
    { id: 14, as: 232332, asname: 'ANYCAST-GLOBAL-BACKBONE Anycast Global Backbone, AU', certainty: '0.92922', notes: 'Using ROV@AMS-IX Route Server and Deployed ROV in AS' },
    { id: 15, as: 1121, asname: 'ANYCAST-GLOBAL-BACKBONE Anycast Global Backbone, AU', certainty: '0.92922', notes: 'Using ROV@AMS-IX Route Server and Deployed ROV in AS' },
    { id: 16, as: 2332, asname: 'GITOYEN-MAIN-AS The main Autonomous System of Gitoyen (Paris, France)., FR', certainty: '0.92922', notes: 'Using ROV@AMS-IX Route Server and Deployed ROV in AS' },
    { id: 17, as: 3123, asname: 'GITOYEN-MAIN-AS The main Autonomous System of Gitoyen (Paris, France)., FR', certainty: '0.92922', notes: 'Using ROV@AMS-IX Route Server and Deployed ROV in AS' },
];


const Main = () => {
    const classes = useStyles();

    return (
        <>
            <Header />
            <main className={classes.container}>
                <Container maxWidth="lg">
                    <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
                        <div className={classes.centerText}>
                            ROV Tracking System
                        </div>
                    </Typography>
                </Container>
                <DataTable rows={rows} columns={columns} />
            </main>
        </>
    )
}

export default Main;