import React, { useState, useEffect } from 'react';
import { Typography, Container } from '@material-ui/core';
import Header from '../../components/header/header';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import DataTable from '../../components/dataTable/dataTables';

const columns = [
  {
    field: 'id',
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
    description:
      'Number of times AS was marked as filtering invalids, over the total number of measurements',
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
  },
];

const Main = () => {
  const classes = useStyles();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/as')
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((row, index) => ({
          id: row.asn,
          as: row.asn,
          asname: row.name,
          certainty: Math.random(),
          notes: 'Using ROV@AMS-IX Route Server and Deployed ROV in AS',
        }));
        setRows(formattedData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Header />
      <main className={classes.container}>
        <Container maxWidth="lg">
          <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
            <div className={classes.centerText}>ROV Tracking System</div>
          </Typography>
        </Container>
        <DataTable rows={rows} columns={columns} />
      </main>
    </>
  );
};

export default Main;
