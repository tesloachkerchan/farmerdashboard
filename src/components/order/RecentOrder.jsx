import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { green, blue, orange } from '@mui/material/colors';
import { AuthContext } from '../../context/AuthContext';

const columns = [
  { id: 'serial', label: 'S/No', minWidth: 50 },
  { id: 'date', label: 'Date', minWidth: 100 },
  { id: 'orderAmount', label: 'Amount', minWidth: 100 },
  { id: 'status', label: 'Status', minWidth: 100 },
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

const RecentOrder = () => {
  const [orders, setOrders] = useState([]);
  const {user} = useContext(AuthContext)

  useEffect(() => {
    fetchRecentOrders();
  }, []);

  const fetchRecentOrders = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/v1/order/farmer/${user._id}`);
      setOrders(response.data.orders);
    } catch (error) {
      console.error('Error fetching recent orders:', error);
    }
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <div className='header'>
        <h1>Recent Orders</h1>
      </div>
      <hr className='sidebarHr' />
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow sx={{ Height: '5px' }}>
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
            {orders.slice(0, 2).map((order, index) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={order._id} component={Link} to={`/order/${order._id}`}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{order.createdAt}</TableCell>
                <TableCell>$ {order.overallTotal}</TableCell>
                <TableCell style={{ color: getStatusColor(order.orderStatus) }}>{order.orderStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default RecentOrder;
