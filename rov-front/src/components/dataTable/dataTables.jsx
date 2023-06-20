import { DataGrid } from '@material-ui/data-grid';

const DataTable = ({ rows, columns, height=800, width='90%', pageSize=13 }) => {
    return (
        <div style={{ height: height, width: width, margin: '0 auto' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={pageSize}
            disableSelectionOnClick
          />
        </div>
    );
};

export default DataTable;