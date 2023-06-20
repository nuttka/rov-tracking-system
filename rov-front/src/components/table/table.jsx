import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  {
    field: 'asname',
    headerName: 'AS Name',
    width: 150,
    editable: false,
  },
  {
    field: 'ip',
    headerName: 'IP',
    width: 150,
    editable: false,
  },
  {
    field: 'recordtype',
    headerName: 'Record Type',
    width: 160,
    editable: false,
  },
  {
    field: 'collector',
    headerName: 'Collector',
    description: 'collector description',
    width: 160,
  },
];

const rows = [
    { id: 1, asname: 'dcc', ip: '210.180.96.0/19', recordtype: 'update', collector: 'route-views.eqix' },
    { id: 2, asname: 'ufmg', ip: '210.180.96.0/19', recordtype: 'update', collector: 'route-views.eqix' },
    { id: 3, asname: 'algo1', ip: '210.180.96.0/19', recordtype: 'update', collector: 'route-views.eqix' },
    { id: 4, asname: 'algo2', ip: '210.180.91.0/19', recordtype: 'update', collector: 'route-views.eqix' },
    { id: 5, asname: 'algo3', ip: '210.180.96.0/19', recordtype: 'update', collector: 'route-views.eqix' },
    { id: 6, asname: 'algo4', ip: '210.180.92.0/19', recordtype: 'update', collector: 'route-views.eqix' },
    { id: 7, asname: 'algo5', ip: '210.180.96.0/19', recordtype: 'update', collector: 'route-views.eqix' },
    { id: 8, asname: 'algo6', ip: '210.180.96.0/19', recordtype: 'update', collector: 'route-views.eqix' },
    { id: 9, asname: 'algo7', ip: '210.180.97.0/19', recordtype: 'update', collector: 'route-views.eqix' },
    { id: 10, asname: 'algo7', ip: '210.180.97.0/19', recordtype: 'update', collector: 'route-views.eqix' },
    { id: 11, asname: 'algo7', ip: '210.180.97.0/19', recordtype: 'update', collector: 'route-views.eqix' },
    { id: 12, asname: 'algo7', ip: '210.180.97.0/19', recordtype: 'update', collector: 'route-views.eqix' },
];

const DataTable = () => {
    return (
        <div style={{ height: 600, width: '40%', margin: '0 auto' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={9}
            disableSelectionOnClick
          />
        </div>
    );
}

export default DataTable;
