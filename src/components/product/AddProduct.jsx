import axios from 'axios'; // Import axios for making HTTP requests
import './addproduct.css'; // Import CSS file for styling
import { useState } from 'react';
function AddProductForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    availableQuantity: '',
    image: null, // To store the image file
  });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the server with the form data
      const response = await axios.post(`http://localhost:4000/api/v1/products/6623d543cf48322887dd9d86`, formData);
      console.log('Product added:', response.data);
      // Clear the form after successful submission
      setFormData({
        name: '',
        description: '',
        price: '',
        availableQuantity: '',
        image: null,
      });
      alert('Product added successfully');
      window.location.href = '/productlist';
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  // Function to handle input changes
  const handleChange = (e) => {
    if (e.target.name === 'image') {
      // Set the image file to the state
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      // Set other form data
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
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
            type="file" // Set type to "file" for uploading files
            accept="image/*" // Specify accepted file types
            name="image"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
}

export default AddProductForm;
