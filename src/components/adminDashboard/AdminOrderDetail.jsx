import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './adminOrderDetail.css'; // Import your CSS file for styling

const AdminOrderDetail = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams(); // Get orderId from URL parameter
  const [order, setOrder] = useState(null); // State to hold order details
  const [selectedStatus, setSelectedStatus] = useState(''); // State to hold selected status
  const [shippingDate, setShippingDate] = useState(''); // State to hold shipping date
  const [shippingCompany, setShippingCompany] = useState(''); // State to hold shipping company
  const [transportationCompanies, setTransportationCompanies] = useState([]); // State to hold transportation companies

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

    // Fetch transportation companies only if the order status is pending
    if (order && order.orderStatus === 'pending') {
      const fetchTransportationCompanies = async () => {
        try {
          const response = await axios.get('http://localhost:4000/api/v1/company');
          setTransportationCompanies(response.data);
        } catch (error) {
          console.error('Error fetching transportation companies:', error);
        }
      };

      fetchTransportationCompanies();
    }
  }, [id, order]); // Fetch data whenever id or order changes

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
      await axios.put(`http://localhost:4000/api/v1/order/status/${id}/${user._id}/${shippingCompany}`, {
        status: selectedStatus,
        shippingDate: shippingDate,
      });
      toast.success('status updated successfully');
      // Optionally, you can fetch the updated order details again to display the updated information
    } catch (error) {
      toast.error('Failed. Please try again later.');

      console.error('Error updating order:', error);
    }
  };

  const handleDeliveryStatusSubmit = async (e) => {
    e.preventDefault();
    // Send a POST request to update the order with the delivery status
    try {
      await axios.put(`http://localhost:4000/api/v1/order/delivery/${id}/${user._id}`, {
        status: 'delivered',
      });
      toast.success('status updated successfully');
      // Optionally, you can fetch the updated order details again to display the updated information
    } catch (error) {
      toast.error('Failed. Please try again later.');
      console.error('Error updating delivery status:', error);
    }
  };

  return (
    <div className='center'>
      <ToastContainer position="top-center" autoClose={3000} style={{ marginTop: '50px' }} />
      <div className="order-detail-container">
        <h2 className="order-detail-title">Order Detail</h2>
        {order ? (
          <div className="order-detail-info">
            <p><strong>Order ID:</strong> {id}</p>
            <p><strong>Buyer ID:</strong> {order.buyerId}</p>
            {order.buyerContactDetails && order.buyerContactDetails.address && (
              <p><strong>Buyer Address:</strong> {order.buyerContactDetails.address}</p>
            )}
            {order.buyerContactDetails && order.buyerContactDetails.phone && (
              <p><strong>Buyer Phone:</strong> {order.buyerContactDetails.phone}</p>
            )}
            <p><strong>Overall Total:</strong> ${order.overallTotal}</p>
            <p><strong>Order Status:</strong> {order.orderStatus}</p>
            {order.transportationDetails && order.transportationDetails.estimatedDeliveryDate && (
              <p><strong>Estimation Delivery Date:</strong> {order.transportationDetails.estimatedDeliveryDate}</p>
            )}
            {order.transportationDetails && order.transportationDetails.DeliveryDate && (
              <p><strong>Delivery Date:</strong> {order.transportationDetails.DeliveryDate}</p>
            )}
            {order.transportationDetails && order.transportationDetails.shippingDate && (
              <p><strong>Shipping Date:</strong> {order.transportationDetails.shippingDate}</p>
             )}
            <p><strong>Created At:</strong> {order.createdAt}</p>
            <p><strong>Updated At:</strong> {order.updatedAt}</p>
            <div className="products-container">
              <strong>Products:</strong>
              <ul>
                {order.products.map((product) => (
                  <li key={product._id}>
                    Product Name: {product.productName}<br />
                    Product ID: {product.productId}<br />
                    Price: {product.ProductPrice}<br />
                    Quantity: {product.quantity}<br />
                    Total Price: ${product.totalPrice}
                    Farmer ID: {product.farmerId}<br />
                    Product Owner: {product.farmerName}<br />
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
        {order && order.orderStatus === 'pending' ? (
        <form onSubmit={handleSubmit} className="order-processing-form">
          <label htmlFor="status">Status:</label>
          <select id="status" value={selectedStatus} onChange={handleStatusChange}>
            <option value="">Select Status</option>
            <option value="processing">Processing</option>
            <option value="shipping">Shipping</option>
            {order && order.orderStatus === 'shipping' && <option value="delivered">Delivered</option>}
          </select>
            <div>
              <label htmlFor="shippingDate">EstimationDelivery Date:</label>
              <input type="date" id="shippingDate" value={shippingDate} onChange={handleShippingDateChange} />
              <label htmlFor="shippingCompany">Shipping Company:</label>
              <select id="shippingCompany" value={shippingCompany} onChange={handleShippingCompanyChange}>
                <option value="">Select Shipping Company</option>
                {transportationCompanies.map(company => (
                  <option key={company._id} value={company._id}>{company.name}</option>
                ))}
              </select>
            </div>
          <button type="submit">Update Order</button>
          </form>
          ) : null}
        {order && order.orderStatus === 'shipping' && (
          <form onSubmit={handleDeliveryStatusSubmit} className="order-processing-form">
            <div>
              <label htmlFor="status" style={{ display: 'inline-block', marginRight: '10px' }}>Status:</label>
              <button type="submit" style={{ display: 'inline-block' }}>Mark as Delivered</button>
            </div>

          </form>
        )}
      </div>
    </div>
  );
};

export default AdminOrderDetail;
