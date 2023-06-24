import { DataGrid, GridToolbar  } from '@material-ui/data-grid';

const DataTable = ({ rows, columns, height=850, width='90%', pageSize=13 }) => {
    return (
        <div style={{ height: height, width: width, margin: '0 auto' }}>
          <DataGrid
            components={{
              Toolbar: GridToolbar,
            }}
            rows={rows}
            columns={columns}
            pageSize={pageSize}
            disableSelectionOnClick
          />
        </div>
    );
};

export default DataTable;