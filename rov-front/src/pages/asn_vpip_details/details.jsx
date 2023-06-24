import React from "react";
import { Typography, Container } from '@material-ui/core'

import Header from '../../components/header/header'
import useStyles from './styles'
import { Link, useParams  } from 'react-router-dom';
import DataTable from "../../components/dataTable/dataTables";


const AsnVpIpDetails = () => {
    const classes = useStyles();
    const { asn, vpip } = useParams();

    const columns = [
        {
          field: 'day',
          headerName: 'Day',
          width: 190,
        },
        {
          field: 'anchorPrefix',
          headerName: 'Anchor Prefix',
          width: 180,
        },
        {
          field: 'experimentPrefix',
          headerName: 'Experiment Prefix',
          width: 220,
        },
        {
          field: 'timestamp',
          headerName: 'Timestamp',
          width: 180,
        },
        {
          field: 'AsPathAnchorPrefix',
          headerName: 'AS Path for Anchor Prefix',
          width: 250,
        },
        {
          field: 'AsPathExperimentPrefix',
          headerName: 'AS Path for Experiment Prefix',
          width: 270,
        },
      ];
      
    let rows = [
        // { id: 1, day: '21/03/2022', anchorPrefix: '147.28.248.0/24', experimentPrefix: '147.28.249.0/24', timestamp: 1597968000, AsPathAnchorPrefix: '852 47065', AsPathExperimentPrefix: '852 47065' },
        // { id: 2, day: '21/03/2022', anchorPrefix: '147.28.248.0/24', experimentPrefix: '147.28.249.0/24', timestamp: 1597968000, AsPathAnchorPrefix: '852 47065', AsPathExperimentPrefix: '852 47065' },
        // { id: 3, day: '21/03/2022', anchorPrefix: '147.28.248.0/24', experimentPrefix: '147.28.249.0/24', timestamp: 1597968000, AsPathAnchorPrefix: '852 47065', AsPathExperimentPrefix: '852 47065' },
        // { id: 4, day: '20/03/2022', anchorPrefix: '147.28.248.0/24', experimentPrefix: '147.28.249.0/24', timestamp: 1597968000, AsPathAnchorPrefix: '852 47065', AsPathExperimentPrefix: '852 47065' },
        // { id: 5, day: '08/03/2022', anchorPrefix: '147.28.248.0/24', experimentPrefix: '147.28.249.0/24', timestamp: 1597968000, AsPathAnchorPrefix: '852 47065', AsPathExperimentPrefix: '852 47065' },
        // { id: 6, day: '06/03/2022', anchorPrefix: '147.28.248.0/24', experimentPrefix: '147.28.249.0/24', timestamp: 1597968000, AsPathAnchorPrefix: '852 47065', AsPathExperimentPrefix: '852 47065' },
        // { id: 7, day: '05/03/2022', anchorPrefix: '147.28.248.0/24', experimentPrefix: '147.28.249.0/24', timestamp: 1597968000, AsPathAnchorPrefix: '852 47065', AsPathExperimentPrefix: '852 47065' },
        // { id: 8, day: '07/03/2022', anchorPrefix: '147.28.248.0/24', experimentPrefix: '147.28.249.0/24', timestamp: 1597968000, AsPathAnchorPrefix: '852 47065', AsPathExperimentPrefix: '852 47065' },
        // { id: 9, day: '08/03/2022', anchorPrefix: '147.28.248.0/24', experimentPrefix: '147.28.249.0/24', timestamp: 1597968000, AsPathAnchorPrefix: '852 47065', AsPathExperimentPrefix: '852 47065' },
        // { id: 10, day: '07/03/2022', anchorPrefix: '147.28.248.0/24', experimentPrefix: '147.28.249.0/24', timestamp: 1597968000, AsPathAnchorPrefix: '852 47065', AsPathExperimentPrefix: '852 47065' },
        // { id: 11, day: '07/03/2022', anchorPrefix: '147.28.248.0/24', experimentPrefix: '147.28.249.0/24', timestamp: 1597968000, AsPathAnchorPrefix: '852 47065', AsPathExperimentPrefix: '852 47065' },
        // { id: 12, day: '21/05/2022', anchorPrefix: '147.28.248.0/24', experimentPrefix: '147.28.249.0/24', timestamp: 1597968000, AsPathAnchorPrefix: '852 47065', AsPathExperimentPrefix: '852 47065' },
        // { id: 13, day: '21/11/2022', anchorPrefix: '147.28.248.0/24', experimentPrefix: '147.28.249.0/24', timestamp: 1597968000, AsPathAnchorPrefix: '852 47065', AsPathExperimentPrefix: '852 47065' },
        // { id: 14, day: '21/12/2022', anchorPrefix: '147.28.248.0/24', experimentPrefix: '147.28.249.0/24', timestamp: 1597968000, AsPathAnchorPrefix: '852 47065', AsPathExperimentPrefix: '852 47065' },
        // { id: 15, day: '21/05/2022', anchorPrefix: '147.28.248.0/24', experimentPrefix: '147.28.249.0/24', timestamp: 1597968000, AsPathAnchorPrefix: '852 47065', AsPathExperimentPrefix: '852 47065' },
        // { id: 16, day: '21/04/2022', anchorPrefix: '147.28.248.0/24', experimentPrefix: '147.28.249.0/24', timestamp: 1597968000, AsPathAnchorPrefix: '852 47065', AsPathExperimentPrefix: '852 47065' },
        // { id: 17, day: '21/03/2022', anchorPrefix: '147.28.248.0/24', experimentPrefix: '147.28.249.0/24', timestamp: 1597968000, AsPathAnchorPrefix: '852 47065', AsPathExperimentPrefix: '852 47065' },
        // { id: 18, day: '21/03/2022', anchorPrefix: '147.28.248.0/24', experimentPrefix: '147.28.249.0/24', timestamp: 1597968000, AsPathAnchorPrefix: '852 47065', AsPathExperimentPrefix: '852 47065' },
        // { id: 19, day: '21/03/2022', anchorPrefix: '147.28.248.0/24', experimentPrefix: '147.28.249.0/24', timestamp: 1597968000, AsPathAnchorPrefix: '852 47065', AsPathExperimentPrefix: '852 47065' },
        // { id: 20, day: '21/03/2022', anchorPrefix: '147.28.248.0/24', experimentPrefix: '147.28.249.0/24', timestamp: 1597968000, AsPathAnchorPrefix: '852 47065', AsPathExperimentPrefix: '852 47065' },
        // { id: 21, day: '21/03/2022', anchorPrefix: '147.28.248.0/24', experimentPrefix: '147.28.249.0/24', timestamp: 1597968000, AsPathAnchorPrefix: '852 47065', AsPathExperimentPrefix: '852 47065' },
        // { id: 22, day: '21/03/2022', anchorPrefix: '147.28.248.0/24', experimentPrefix: '147.28.249.0/24', timestamp: 1597968000, AsPathAnchorPrefix: '852 47065', AsPathExperimentPrefix: '852 47065' },
        // { id: 23, day: '21/03/2022', anchorPrefix: '147.28.248.0/24', experimentPrefix: '147.28.249.0/24', timestamp: 1597968000, AsPathAnchorPrefix: '852 47065', AsPathExperimentPrefix: '852 47065' },
        // { id: 24, day: '21/03/2022', anchorPrefix: '147.28.248.0/24', experimentPrefix: '147.28.249.0/24', timestamp: 1597968000, AsPathAnchorPrefix: '852 47065', AsPathExperimentPrefix: '852 47065' },
        // { id: 25, day: '21/03/2022', anchorPrefix: '147.28.248.0/24', experimentPrefix: '147.28.249.0/24', timestamp: 1597968000, AsPathAnchorPrefix: '852 47065', AsPathExperimentPrefix: '852 47065' },
    ];

    function randomDate(start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
      
    for (let i=0; i<199000; i++) {
      let d = randomDate(new Date(2012, 0, 1), new Date());
      rows.push({ id: i, day: d, anchorPrefix: '147.28.248.0/24', experimentPrefix: '147.28.249.0/24', timestamp: d.getTime(), AsPathAnchorPrefix: '852 47065', AsPathExperimentPrefix: '852 47065' });
    }

    return (
        <>
            <Header />
            <main className={classes.container}>
                <Container maxWidth="lg">
                    <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
                        <div className={classes.centerText}>
                            Details for ASN {asn} and Vantage Point IP {vpip}
                        </div>
                    </Typography>
                </Container>
                <DataTable rows={rows} columns={columns} height={800} width={'70%'} pageSize={13} />
            </main>
        </>
    )
}

export default AsnVpIpDetails;