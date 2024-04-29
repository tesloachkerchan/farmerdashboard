import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { green, blue, orange } from '@mui/material/colors';

const columns = [
  { id: 'serial', label: 'S/No', minWidth: 50 },
  { id: 'date', label: 'Date', minWidth: 100 },
  { id: 'orderId', label: 'Order ID', minWidth: 100 },
  { id: 'orderAmount', label: 'Order Amount', minWidth: 100 },
  { id: 'status', label: 'Status', minWidth: 100 },
];

function createData(serial, date, orderId, orderAmount, status) {
  return { serial, date, orderId, orderAmount, status };
}

const rows = [
  createData(1, '2024-04-01', 'ORD001', 100, 'Pending'),
  createData(2, '2024-04-02', 'ORD002', 150, 'Completed'),
  createData(3, '2024-04-03', 'ORD003', 200, 'Pending'),
  // Add more rows as needed
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Pending':
      return orange[500];
    case 'Completed':
      return green[500];
    default:
      return blue[500];
  }
};

const OrderTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <div className='header'>
        <h1>Orders</h1>
        <div className='search'>
          <input type='text' placeholder='search' className="searchInput" />
        </div>
      </div>
      <hr className='sidebarHr' />
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow sx={{Height: '5px' }}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.serial} component={Link} to={`/order/${row.orderId}`}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} style={{ color: column.id === 'status' ? getStatusColor(value) : 'inherit' }}>
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[6, 12]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ justifyContent: 'center' }}
      />
    </Paper>
  );
};

export default OrderTable;
