import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
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
import SearchIcon from '@mui/icons-material/Search';
import { toast, ToastContainer } from 'react-toastify';
import './order.css'
import './orderTable.css'

const columns = [
  { id: 'serial', label: 'S/No', minWidth: 50 },
  { id: 'date', label: 'Date', minWidth: 100 },
  { id: 'orderId', label: 'Order ID', minWidth: 100 },
  { id: 'orderAmount', label: 'Order Amount', minWidth: 100 },
  { id: 'status', label: 'Status', minWidth: 100 },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'pending':
      return orange[500];
    case 'delivered':
      return green[500];
    default:
      return blue[500];
  }
};

const OrderTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [orders, setOrders] = useState([]);
  const {user} = useContext(AuthContext)

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/v1/order/farmer/${user._id}`);
      const { data } = response;
      console.log(data)
      if (Array.isArray(data.orders)) {
        setOrders(data.orders);
      } else {
        console.error('Invalid data format for orders:', data);
      }
    } catch (error) {
      if (error.response && error.response.status === 403) {
        // Handle case where farmer is not found or not active
        toast.error(error.response.data.message);
      } else {
        toast.error('Failed. Please try again later.');
      }
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return <>
    <div className='orderTable'>
      <Paper sx={{ width: '100%' }}>
      <div className='header'>
          <h1>Orders</h1>
           <ToastContainer position="top-center" autoClose={3000} style={{ marginTop: '50px' }} />
        <div className='search'>
          <div className='searchIcon'><SearchIcon /></div>
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
            {orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order, index) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={order._id} component={Link} to={`/order/${order._id}`}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{order.createdAt}</TableCell>
                  <TableCell>{order._id}</TableCell>
                  <TableCell>ETB {order.overallTotal}</TableCell>
                
                  <TableCell style={{ color: getStatusColor(order.orderStatus) }}>{order.orderStatus}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[6, 12]}
        component="div"
        count={orders.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ justifyContent: 'center' }}
      />
    </Paper>
    </div>
  </>;
};

export default OrderTable;
