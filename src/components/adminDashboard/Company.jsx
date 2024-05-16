// AdminTransportationCompany.js
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
import { blue } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import './adminOrder.css';

const columns = [
    { id: 'serial', label: 'S/No', minWidth: 50 },
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'location', label: 'Location', minWidth: 100 },
    { id: 'email', label: 'Email', minWidth: 100 },
    { id: 'phone', label: 'Phone', minWidth: 100 },
    { id: 'address', label: 'Address', minWidth: 100 },
];

const Company = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(6);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        fetchCompanies();
    }, []);

    const fetchCompanies = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/v1/user/company`);
            const { data } = response;
            console.log(data)
            if (Array.isArray(data.companys)) {
                setCompanies(data.companys);
            } else {
                console.error('Invalid data format for companies:', data);
            }
        } catch (error) {
            console.error('Error fetching companies:', error);
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
        <div className='center'>
            <Paper sx={{ width: '100%' }}>
                <div className='header'>
                    <h1>Transportation Companies</h1>
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
                            {companies.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((company, index) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={company._id}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{company.name}</TableCell>
                                    <TableCell>{company.location}</TableCell>
                                    <TableCell>{company.email}</TableCell>
                                    <TableCell>{company.contactDetails.phone}</TableCell>
                                    <TableCell>{company.contactDetails.address}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[6, 12]}
                    component="div"
                    count={companies.length}
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

export default Company;
