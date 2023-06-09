import React from "react";
import { Typography, Container } from '@material-ui/core'

import Header from '../../components/header/header'
import useStyles from './styles'
import { Link, useParams  } from 'react-router-dom';
import DataTable from "../../components/dataTable/dataTables";




const AsnDetails = () => {
  const { asn } = useParams();

  const columns = [
    {
      field: 'vpIp',
      headerName: 'Vantage Point IP',
      width: 190,
    },
    {
      field: 'daysMeasured',
      headerName: 'Days Measured',
      description: 'Number of days when routes we are collected from this vantage point',
      width: 180,
    },
    {
      field: 'daysFiltering',
      headerName: 'Days Filtering',
      description: 'Number of days when this vantage point was marked as filtering by our analysis',
      width: 180,
    },
    {
      field: 'lastMeasured',
      headerName: 'Last Measured',
      width: 180,
    },
    {
      field: 'lastMarked',
      headerName: 'Last Marked',
      width: 160,
    },
    {
      field: 'details',
      headerName: 'Details',
      width: 160,
      renderCell: (params) => (
        <Link to={`/details/${asn}/${params.getValue(params.id, 'vpIp')}`} style={{ textDecoration: 'none' }}>
          Details
        </Link>
      ),
    },
  ];

  const rows = [
      // { id: 1, vpIp: '154.11.15.28', daysMeasured: 103, daysFiltering: 86, lastMeasured: '31/08/2022', lastMarked: '31/08/2022' },
      // { id: 2, vpIp: '208.115.136.67', daysMeasured: 87, daysFiltering: 84, lastMeasured: '31/08/2022', lastMarked: '31/08/2022' },
      // { id: 3, vpIp: '154.11.12.212', daysMeasured: 192, daysFiltering: 79, lastMeasured: '31/08/2022', lastMarked: '31/08/2022' },
      // { id: 4, vpIp: '154.11.15.28', daysMeasured: 103, daysFiltering: 86, lastMeasured: '31/08/2022', lastMarked: '31/08/2022' },
      // { id: 5, vpIp: '208.115.136.67', daysMeasured: 87, daysFiltering: 84, lastMeasured: '31/08/2022', lastMarked: '31/08/2022' },
      // { id: 6, vpIp: '154.11.12.212', daysMeasured: 192, daysFiltering: 79, lastMeasured: '31/08/2022', lastMarked: '31/08/2022' },
      // { id: 7, vpIp: '154.11.15.28', daysMeasured: 103, daysFiltering: 86, lastMeasured: '31/08/2022', lastMarked: '31/08/2022' },
      // { id: 8, vpIp: '208.115.136.67', daysMeasured: 87, daysFiltering: 84, lastMeasured: '31/08/2022', lastMarked: '31/08/2022' },
      // { id: 9, vpIp: '154.11.12.212', daysMeasured: 192, daysFiltering: 79, lastMeasured: '31/08/2022', lastMarked: '31/08/2022' },
      // { id: 10, vpIp: '154.11.15.28', daysMeasured: 103, daysFiltering: 86, lastMeasured: '31/08/2022', lastMarked: '31/08/2022' },
      // { id: 12, vpIp: '208.115.136.67', daysMeasured: 87, daysFiltering: 84, lastMeasured: '31/08/2022', lastMarked: '31/08/2022' },
      // { id: 13, vpIp: '154.11.12.212', daysMeasured: 192, daysFiltering: 79, lastMeasured: '31/08/2022', lastMarked: '31/08/2022' },
      // { id: 14, vpIp: '154.11.15.28', daysMeasured: 103, daysFiltering: 86, lastMeasured: '31/08/2022', lastMarked: '31/08/2022' },
      // { id: 15, vpIp: '208.115.136.67', daysMeasured: 87, daysFiltering: 84, lastMeasured: '31/08/2022', lastMarked: '31/08/2022' },
      // { id: 16, vpIp: '154.11.12.212', daysMeasured: 192, daysFiltering: 79, lastMeasured: '31/08/2022', lastMarked: '31/08/2022' },
      // { id: 17, vpIp: '154.11.15.28', daysMeasured: 103, daysFiltering: 86, lastMeasured: '31/08/2022', lastMarked: '31/08/2022' },
      // { id: 18, vpIp: '208.115.136.67', daysMeasured: 87, daysFiltering: 84, lastMeasured: '31/08/2022', lastMarked: '31/08/2022' },
      // { id: 19, vpIp: '154.11.12.212', daysMeasured: 192, daysFiltering: 79, lastMeasured: '31/08/2022', lastMarked: '31/08/2022' },
  ];

  function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
    
  for (let i=0; i<199000; i++) {
    let d = randomDate(new Date(2012, 0, 1), new Date());

    const today = d;
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;


    let dm = randomIntFromInterval(1, 900);
    let df = randomIntFromInterval(1, 900);
    rows.push(
      { id: i, vpIp: '154.11.12.212', daysMeasured: dm, daysFiltering: df, lastMeasured: d, lastMarked: d });
  }

  const classes = useStyles();

  return (
      <>
          <Header />
          <main className={classes.container}>
              <Container maxWidth="lg">
                  <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
                      <div className={classes.centerText}>
                          Details for ASN {asn}
                      </div>
                  </Typography>
              </Container>
              <DataTable rows={rows} columns={columns} height={800} width={'55%'} pageSize={13} />
          </main>
      </>
  )
}

export default AsnDetails;