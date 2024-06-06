import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'; // Import Axios
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
import VisibilityIcon from '@mui/icons-material/Visibility';
import { red, blue } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './product.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from '../../utils/Config';

const columns = [
  { id: 'serial', label: 'S/No', minWidth: 50 },
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'price', label: 'Price', minWidth: 100 },
  { id: 'quantity', label: 'Quantity', minWidth: 100 },
  { id: 'actions', label: 'Actions', minWidth: 100 },
];

export default function ColumnGroupingTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchInput, setSearchInput] = useState('');
  const [products, setProducts] = useState([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState(null);
  const [deleteReason, setDeleteReason] = useState('');
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // Fetch product data when component mounts
    fetchProducts();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/products`); // Replace '/api/products' with your actual backend endpoint
      setProducts(response.data); // Set the fetched products into state
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleOpenDeleteModal = (productId) => {
    setDeleteProductId(productId);
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
    setDeleteProductId(null);
    setDeleteReason('');
  };

  const handleDelete = async () => {
    if (deleteReason.trim() === '') {
      alert('Please provide a reason for deleting the product.');
      return;
    }

    try {
      await axios.delete(`${BASE_URL}/api/v1/products/deleteproduct/admin/${deleteProductId}`, {
        data: { reason: deleteReason },
      });
      // Refresh the products list after deletion
      fetchProducts();
      handleCloseDeleteModal();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Filter products based on search input
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className='center'>
      <Paper sx={{ width: '100%' }}>
        <div className='header'>
          <h1>Products</h1>
          <div className='search'>
            <div className='searchIcon'><SearchIcon /></div>
            <input
              type='text'
              placeholder='Search Product'
              className="searchInput"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
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
              {filteredProducts
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((product, index) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={product.id} >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>ETB {product.price}</TableCell>
                    <TableCell>{product.availableQuantity}</TableCell>
                    <TableCell>
                      <Link to={`/adminproduct/detail/${product._id}`}>
                        <IconButton >
                          <VisibilityIcon style={{ color: blue[500] }} />
                        </IconButton>
                      </Link>
                      <IconButton onClick={() => handleOpenDeleteModal(product._id)}>
                        <DeleteIcon style={{ color: red[500],margin:4 }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={filteredProducts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ justifyContent: 'center' }}
        />
      </Paper>
      <Modal
        open={deleteModalOpen}
        onClose={handleCloseDeleteModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{ ...style }}>
          <h2 id="modal-title">Delete Product</h2>
          <p id="modal-description">Please provide a reason for deleting this product:</p>
          <TextField
            fullWidth
            label="Reason"
            variant="outlined"
            value={deleteReason}
            onChange={(e) => setDeleteReason(e.target.value)}
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            onClick={handleDelete}
            sx={{ mt: 2, bgcolor: 'teal', '&:hover': { bgcolor: 'darkslategray' } }}
          >
            Confirm Delete
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

// Add style for the modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
