import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { green, red, blue } from '@mui/material/colors';
import './product.css'

const columns = [
  { id: 'serial', label: 'S/No', minWidth: 50 },
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'price', label: 'Price', minWidth: 100 },
  { id: 'quantity', label: 'Quantity', minWidth: 100 },
  { id: 'value', label: 'Value', minWidth: 100 },
  { id: 'actions', label: 'Actions', minWidth: 100 },
];

function createData(serial, name, price, quantity, value) {
  return { serial, name, price, quantity, value };
}

const rows = [
  createData(1, 'Product 1', 10, 5, 50),
  createData(2, 'Product 2', 15, 3, 45),
  createData(3, 'Product 3', 20, 7, 140),
  createData(4, 'Product 4', 8, 10, 80),
  createData(5, 'Product 5', 12, 6, 72),
  createData(6, 'Product 6', 25, 2, 50),
  createData(7, 'Product 7', 18, 4, 72),
  createData(8, 'Product 8', 30, 1, 30),
  createData(9, 'Product 9', 22, 3, 66),
  createData(10, 'Product 10', 16, 5, 80),
  createData(11, 'Product 11', 14, 2, 28),
  createData(12, 'Product 12', 11, 8, 88),
  createData(13, 'Product 13', 11, 8, 88),
  createData(14, 'Product 14', 11, 8, 88),
];

export default function ColumnGroupingTable() {
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
        <h1>Products</h1>
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
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.serial}>
                    {columns.map((column) => {
                      if (column.id === 'actions') {
                        return (
                          <TableCell key={column.id} align="center">
                            <IconButton>
                              <VisibilityIcon style={{ color: blue[500] }} />
                            </IconButton>
                            <IconButton>
                              <EditIcon style={{ color: green[500] }} />
                            </IconButton>
                            <IconButton>
                              <DeleteIcon style={{ color: red[500] }} />
                            </IconButton>
                          </TableCell>
                        );
                      } else {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      }
                    })}
                  </TableRow>
                );
              })}
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
}
