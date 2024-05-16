import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './productDetail.css'; // Import your CSS file for styling

const FarmerProfile = () => {
  const { id } = useParams(); // Get farmerId from URL parameter
  const [farmer, setFarmer] = useState(); // State to hold farmer details
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Fetch farmer details using farmerId
    const fetchFarmer = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/v1/user/farmer/${id}`);
        const farmerData = response.data;
        setFarmer(farmerData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching farmer:', error);
        setLoading(false);
      }
    };

    fetchFarmer();
  }, [id]); // Fetch farmer details whenever id changes

  const handleStatusToggle = async () => {
    try {
      const newStatus = farmer[0].status === 'active' ? 'inactive' : 'active';
      const response = await axios.put(`http://localhost:4000/api/v1/user/farmer/${id}/status`, { status: newStatus });
      if (response.status === 200) {
        // Update local state if request is successful
        setFarmer(prevFarmer => [{ ...prevFarmer[0], status: newStatus }]);
      }
    } catch (error) {
      console.error('Error toggling status:', error);
    }
  };

  return (
    <div className='center'>
      <div className="product-detail-container">
        <h2 className="product-detail-title">Farmer Profile</h2>
        {loading ? (
          <p>Loading...</p>
        ) : farmer ? (
          <div className="product-detail-info">
            <div className="product-detail-header">
              <img src={farmer[0].photo} alt={farmer[0].name} className="product-image" />
              <div className="product-header-details">
                <p><strong>Name:</strong> {farmer[0].name}</p>
                <p><strong>Location:</strong> {farmer[0].location}</p>
                <p><strong>Email:</strong> {farmer[0].email}</p>
                <p><strong>Market:</strong> {farmer[0].market}</p>
                <p><strong>Address:</strong> {farmer[0].contactDetails.address}</p>
                <p><strong>Phone:</strong> {farmer[0].contactDetails.phone}</p>
                <p>
                  <strong>Status:</strong>{' '}
                  <span className={farmer[0].status === 'active' ? 'active-status' : 'inactive-status'}>
                    {farmer[0].status}
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
    backgroundColor: farmer[0].status === 'active' ? '#ff6347' : '#90ee90',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin:'10px 0'
  }}
>
  {farmer[0].status === 'active' ? 'Deactivate Account' : 'Activate Account'}
</button>
          </div>
        ) : (
          <p>Farmer not found.</p>
        )}
      </div>
    </div>
  );
};

export default FarmerProfile;
