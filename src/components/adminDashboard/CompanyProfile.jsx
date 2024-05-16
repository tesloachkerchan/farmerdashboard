import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './productDetail.css'; // Import your CSS file for styling

const CompanyProfile = () => {
  const { id } = useParams(); // Get companyId from URL parameter
  const [company, setCompany] = useState(); // State to hold farmer details
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Fetch farmer details using farmerId
    const fetchCompany = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/v1/user/company/${id}`);
        const companyData = response.data;
        setCompany(companyData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching company:', error);
        setLoading(false);
      }
    };

    fetchCompany();
  }, [id]); // Fetch farmer details whenever id changes

  const handleStatusToggle = async () => {
    try {
      const newStatus = company[0].status === 'active' ? 'inactive' : 'active';
      const response = await axios.put(`http://localhost:4000/api/v1/user/company/${id}/status`, { status: newStatus });
      if (response.status === 200) {
        // Update local state if request is successful
        setCompany(prevcompany => [{ ...prevcompany[0], status: newStatus }]);
      }
    } catch (error) {
      console.error('Error toggling status:', error);
    }
  };

  return (
    <div className='center'>
      <div className="product-detail-container">
        <h2 className="product-detail-title">company Profile</h2>
        {loading ? (
          <p>Loading...</p>
        ) : company ? (
          <div className="product-detail-info">
            <div className="product-detail-header">
              <img src={company[0].photo} alt={company[0].name} className="product-image" />
              <div className="product-header-details">
                <p><strong>Name:</strong> {company[0].name}</p>
                <p><strong>Location:</strong> {company[0].location}</p>
                <p><strong>Email:</strong> {company[0].email}</p>
                <p><strong>Address:</strong> {company[0].contactDetails.address}</p>
                <p><strong>Phone:</strong> {company[0].contactDetails.phone}</p>
                <p>
                  <strong>Status:</strong>{' '}
                  <span className={company[0].status === 'active' ? 'active-status' : 'inactive-status'}>
                    {company[0].status}
                  </span>
                </p>
              </div>
            </div>
            <div className="description-container">
                <strong>License:</strong> {/* Render other company details as needed */}
              </div>
              <button
  onClick={handleStatusToggle}
  style={{
    padding: '10px 20px',
    backgroundColor: company[0].status === 'active' ? '#ff6347' : '#90ee90',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin:'10px 0'
  }}
>
  {company[0].status === 'active' ? 'Deactivate Account' : 'Activate Account'}
</button>
          </div>
        ) : (
          <p>company not found.</p>
        )}
      </div>
    </div>
  );
};

export default CompanyProfile;
