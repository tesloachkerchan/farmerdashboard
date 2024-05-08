import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './orderDetailPage.css'; // Import your CSS file for styling

const OrderDetailPage = () => {
  const { id } = useParams(); // Get orderId from URL parameter
  const [order, setOrder] = useState(null); // State to hold order details
  const [selectedStatus, setSelectedStatus] = useState(''); // State to hold selected status
  const [shippingDate, setShippingDate] = useState(''); // State to hold shipping date
  const [shippingCompany, setShippingCompany] = useState(''); // State to hold shipping company

  useEffect(() => {
    // Fetch order details using orderId
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/v1/order/singleOrder/${id}`);
        const orderData = response.data; // Get order data from response
        setOrder(orderData);
      } catch (error) {
        console.error('Error fetching order:', error);
      }
    };

    fetchOrder();
  }, [id]); // Fetch order details whenever id changes

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleShippingDateChange = (e) => {
    setShippingDate(e.target.value);
  };

  const handleShippingCompanyChange = (e) => {
    setShippingCompany(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send a POST request to update the order with the selected status, shipping date, and shipping company
    try {
      await axios.post(`http://localhost:4000/api/v1/order/update/${id}`, {
        status: selectedStatus,
        shippingDate: shippingDate,
        shippingCompany: shippingCompany,
      });
      // Optionally, you can fetch the updated order details again to display the updated information
    } catch (error) {
      console.error('Error updating order:', error);
    }
  };

  return <>
    <div className='center'>
      <div className="order-detail-container">
      <h2 className="order-detail-title">Order Detail</h2>
      {order ? (
        <div className="order-detail-info">
          <p><strong>Order ID:</strong> {id}</p>
          <p><strong>Buyer ID:</strong> {order.buyerId}</p>
          <p><strong>Overall Total:</strong> ${order.overallTotal}</p>
          <p><strong>Order Status:</strong> {order.orderStatus}</p>
          <p><strong>Created At:</strong> {order.createdAt}</p>
          <p><strong>Updated At:</strong> {order.updatedAt}</p>
          <div className="products-container">
            <strong>Products:</strong>
            <ul>
              {order.products.map((product) => (
                <li key={product._id}>
                  Product ID: {product.productId}<br />
                  Farmer ID: {product.farmerId}<br />
                  Quantity: {product.quantity}<br />
                  Total Price: ${product.totalPrice}
                </li>
              ))}
            </ul>
          </div>
          {/* Form for processing the order */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    <div className='process-detail-container'>
      <form onSubmit={handleSubmit} className="order-processing-form">
            <label htmlFor="status">Status:</label>
            <select id="status" value={selectedStatus} onChange={handleStatusChange}>
              <option value="">Select Status</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
            </select>
            <label htmlFor="shippingDate">Shipping Date:</label>
            <input type="date" id="shippingDate" value={shippingDate} onChange={handleShippingDateChange} />
            <label htmlFor="shippingCompany">Shipping Company:</label>
            <input type="text" id="shippingCompany" value={shippingCompany} onChange={handleShippingCompanyChange} />
            <button type="submit">Update Order</button>
          </form>
    </div>
    </div>
  </>;
};

export default OrderDetailPage;
