import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BASE_URL} from '../../utils/Config'
import { CircularProgress } from "@mui/material";
import './editproduct.css';

function EditProductForm() {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    availableQuantity: '',
    image: null,
  });

  useEffect(() => {
    // Fetch the product data when the component mounts
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/products/singleProduct/${id}`);
        const productData = response.data;
        console.log(productData)
      setFormData({
        name: productData.name,
        description: productData.description,
        price: productData.price,
        availableQuantity: productData.availableQuantity,
        // You may want to handle the image separately based on your backend logic
        // For simplicity, this example does not include image handling
      });

    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Send a PUT request to update the product with the new data
      const response = await axios.put(`${BASE_URL}/api/v1/products/${id}`, formData);
      console.log('Product updated:', response.data);
      // Clear the form after successful submission
      setFormData({
        name: '',
        description: '',
        price: '',
        availableQuantity: '',
        image: null,
      });
        toast.success('Product updated successfully');
    } catch (error) {
      toast.error('Failed. Please try again later.');
      console.error('Error updating product:', error);
    }finally {
      setLoading(false); // Set loading back to false when request completes
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className='center'>
      <ToastContainer position="top-center" autoClose={3000} style={{ marginTop: '50px' }} />
      <div className="edit-product-container">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit} className="edit-product-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="form-control"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Available Quantity:</label>
          <input
            type="number"
            name="availableQuantity"
            value={formData.availableQuantity}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            name="image"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {loading ? (
            <div className="loading" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CircularProgress className="progress" /></div>
          ) : (
            <button type="submit" className="btn-primary">
              Add Product
            </button>
          )}
      </form>
    </div>
    </div>
  );
}

export default EditProductForm;
