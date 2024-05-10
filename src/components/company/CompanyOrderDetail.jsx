import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import './companyOrderDetail.css'; // Import your CSS file for styling

const OrderDetailPage = () => {
  const { id } = useParams(); // Get orderId from URL parameter
  const [order, setOrder] = useState(null); // State to hold order details
  const [shippingDate, setShippingDate] = useState(''); // State to hold shipping date

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
  }, [id, order]); // Fetch data whenever id changes

  const handleShippingDateChange = (e) => {
    setShippingDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send a PUT request to update the order with the selected shipping date and status to 'shipping'
    try {
      await axios.put(`http://localhost:4000/api/v1/order/status/transportation/${id}`, {
        status: 'shipping',
        shippingDate: shippingDate,
      });
      toast.success('Order status updated to shipping successfully');
      // Optionally, you can fetch the updated order details again to display the updated information
    } catch (error) {
      toast.error('Failed to update order status to shipping. Please try again later.');
      console.error('Error updating order status to shipping:', error);
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
            {order.farmerContactDetails && order.farmerContactDetails.address && (
              <p><strong>Farmer Address:</strong> {order.farmerContactDetails.address}</p>
            )}
            {order.farmerContactDetails && order.farmerContactDetails.phone && (
              <p><strong>Farmer Phone:</strong> {order.farmerContactDetails.phone}</p>
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
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {order && order.orderStatus === 'processing' && (
        <div className='process-detail-container'>
          <form onSubmit={handleSubmit} className="order-processing-form">
            <label htmlFor="shippingDate">Shipping Date:</label>
            <input type="date" id="shippingDate" value={shippingDate} onChange={handleShippingDateChange} />
            <button type="submit">Update Order Status to Shipping</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default OrderDetailPage;
