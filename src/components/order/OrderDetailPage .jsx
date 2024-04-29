import React from 'react';
import { useParams } from 'react-router-dom';

const OrderDetailPage = () => {
  const { id } = useParams(); // Get orderId from URL parameter

  // Fetch order details using orderId and display them
  return (
    <div>
      <h2>Order Detail</h2>
      <p>Order ID: {id}</p>
      {/* Display other order details */}
    </div>
  );
};

export default OrderDetailPage;
