import axios from 'axios';
import './addproduct.css';
import { useState, useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../context/AuthContext';

function AddProductForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    availableQuantity: '',
    image: null,
  });
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('availableQuantity', formData.availableQuantity);
      formDataToSend.append('image', formData.image);

      const response = await axios.post(
        `http://localhost:4000/api/v1/products/${user._id}`,
        formDataToSend
      );
      console.log('Product added:', response.data);
      setFormData({
        name: '',
        description: '',
        price: '',
        availableQuantity: '',
        image: null,
      });
      toast.success('Product added successfully');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      // Check if a file is selected
      if (e.target.files.length > 0) {
        // Add the file to formData
        setFormData({ ...formData, image: e.target.files[0] });
      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleTextareaChange = (e) => {
    // Auto-resize textarea based on content
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';

    // Set form data
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      <ToastContainer position="top-center" autoClose={3000} />
      <form onSubmit={handleSubmit} className="add-product-form">
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
            onChange={handleTextareaChange}
            required
            className="form-control"
            style={{ minHeight: '100px' }} // Set initial height
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
        <button type="submit" className="btn">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProductForm;
