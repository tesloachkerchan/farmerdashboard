import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { green, orange } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../utils/Config';
import './adminOrder.css';

const columns = [
    { id: 'serial', label: 'S/No', minWidth: 50 },
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'email', label: 'Email', minWidth: 100 },
    { id: 'market', label: 'Market', minWidth: 100 },
    { id: 'status', label: 'Status', minWidth: 100 },
];

const getStatusColor = (status) => {
    return status === 'active' ? green[500] : orange[500];
};

const Farmer = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(6);
    const [farmers, setFarmers] = useState([]);

    useEffect(() => {
        fetchFarmers();
    }, []);

    const fetchFarmers = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/user/farmer`); // Update endpoint to fetch farmers
            const { data } = response;
            console.log(data)
            if (Array.isArray(data.farmers)) {
                setFarmers(data.farmers);
            } else {
                console.error('Invalid data format for farmers:', data);
            }
        } catch (error) {
            console.error('Error fetching farmers:', error);
        }
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className='orderTable'>
            <Paper sx={{ width: '100%' }}>
                <div className='header'>
                    <h1>Farmers</h1>
                    <div className='search'>
                        <div className='searchIcon'><SearchIcon /></div>
                        <input type='text' placeholder='search' className="searchInput" />
                    </div>
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
                            {farmers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((farmer, index) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={farmer._id} component={Link} to={`/farmerprofile/${farmer._id}`}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{farmer.name}</TableCell>
                                    <TableCell>{farmer.email}</TableCell>
                                    <TableCell>{farmer.market}</TableCell>
                                    <TableCell>
                                        <span style={{ color: getStatusColor(farmer.status) }}>
                                            {farmer.status}
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[6, 12]}
                    component="div"
                    count={farmers.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    sx={{ justifyContent: 'center' }}
                />
            </Paper>
        </div>
    );
};

export default Farmer;
