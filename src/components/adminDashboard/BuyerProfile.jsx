import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './productDetail.css'; // Import your CSS file for styling

const BuyerProfile = () => {
  const { id } = useParams(); // Get farmerId from URL parameter
  const [buyer, setBuyer] = useState(); // State to hold farmer details
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Fetch farmer details using farmerId
    const fetchBuyer = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/v1/user/buyer/${id}`);
        const buyerData = response.data;
        setBuyer(buyerData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching farmer:', error);
        setLoading(false);
      }
    };

    fetchBuyer();
  }, [id]); // Fetch farmer details whenever id changes

  const handleStatusToggle = async () => {
    try {
      const newStatus = buyer[0].status === 'active' ? 'inactive' : 'active';
      const response = await axios.put(`http://localhost:4000/api/v1/user/buyer/${id}/status`, { status: newStatus });
      if (response.status === 200) {
        // Update local state if request is successful
        setBuyer(prevFarmer => [{ ...prevFarmer[0], status: newStatus }]);
      }
    } catch (error) {
      console.error('Error toggling status:', error);
    }
  };

  return (
    <div className='center'>
      <div className="product-detail-container">
        <h2 className="product-detail-title">Buyer Profile</h2>
        {loading ? (
          <p>Loading...</p>
        ) : buyer ? (
          <div className="product-detail-info">
            <div className="product-detail-header">
              <img src={buyer[0].photo} alt={buyer[0].name} className="product-image" />
              <div className="product-header-details">
                <p><strong>Name:</strong> {buyer[0].name}</p>
                <p><strong>Email:</strong> {buyer[0].email}</p>
                <p><strong>Address:</strong> {buyer[0].contactDetails.address}</p>
                <p><strong>Phone:</strong> {buyer[0].contactDetails.phone}</p>
                <p>
                  <strong>Status:</strong>{' '}
                  <span className={buyer[0].status === 'active' ? 'active-status' : 'inactive-status'}>
                    {buyer[0].status}
                  </span>
                </p>
              </div>
            </div>
            <div className="description-container">
                <strong>License:</strong> {/* Render other farmer details as needed */}
              </div>
              <button
  onClick={handleStatusToggle}
  style={{
    padding: '10px 20px',
    backgroundColor: buyer[0].status === 'active' ? '#ff6347' : '#90ee90',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin:'10px 0'
  }}
>
  {buyer[0].status === 'active' ? 'Deactivate Account' : 'Activate Account'}
</button>
          </div>
        ) : (
          <p>Farmer not found.</p>
        )}
      </div>
    </div>
  );
};

export default BuyerProfile;
