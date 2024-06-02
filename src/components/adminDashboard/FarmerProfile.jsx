import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../utils/Config';
import './productDetail.css'; // Import your CSS file for styling

const FarmerProfile = () => {
  const { id } = useParams(); // Get farmerId from URL parameter
  const [farmer, setFarmer] = useState(); // State to hold farmer details
  const [loading, setLoading] = useState(true); // State to track loading status
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal visibility

  useEffect(() => {
    // Fetch farmer details using farmerId
    const fetchFarmer = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/user/farmer/${id}/admin`);
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
      const response = await axios.put(`${BASE_URL}/api/v1/user/farmer/${id}/status`, { status: newStatus });
      if (response.status === 200) {
        // Update local state if request is successful
        setFarmer(prevFarmer => [{ ...prevFarmer[0], status: newStatus }]);
      }
      toast.success('Status updated successfully');
    } catch (error) {
      if (error.response && error.response.status === 403) {
        // Handle case where farmer is not found or not active
        toast.error(error.response.data.message);
      } else {
        toast.error('Failed. Please try again later.');
      }
    }
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='center'>
      <div className="product-detail-container">
        <h2 className="product-detail-title">Farmer Profile</h2>
        <ToastContainer position="top-center" autoClose={3000} style={{ marginTop: '50px' }} />
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
              <strong>License:</strong>{' '}
              <div className="description-container">
                <p>
                  <img
                    src={farmer[0].license}
                    alt="License"
                    onClick={handleImageClick}
                    style={{ cursor: 'pointer', width: '100%', height: '200px', objectFit: 'cover' }}
                  />
                </p>
            </div>
            <button
              onClick={handleStatusToggle}
              style={{
                padding: '10px 20px',
                backgroundColor: farmer[0].status === 'active' ? '#ff6347' : 'rgb(1, 114, 114)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                margin: '10px 0'
              }}
            >
              {farmer[0].status === 'active' ? 'Deactivate Account' : 'Activate Account'}
            </button>
          </div>
        ) : (
          <p>Farmer not found.</p>
        )}
      </div>

      {/* Modal for license image */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}
          onClick={closeModal}
        >
          <div
            style={{
              position: 'relative',
              padding: '20px',
              backgroundColor: '#fff',
              borderRadius: '5px',
            }}
          >
            <img
              src={farmer[0].license}
              alt="License"
              style={{ maxWidth: '100%', maxHeight: '80vh' }}
            />
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: '#ff6347',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmerProfile;
