import React from 'react';
import './profile.css';

const ProfileDisplay = ({ farmer, onEdit }) => {
    return (
        <>
            {farmer[0] &&
            <div className="profile-display">
                <div className="cover-photo">
                    <img src="https://i.ibb.co/bNY25qJ/22539f0cbe01.jpg" alt="Cover" />
                </div>
                <div className="profile-info">
                    <img src={farmer[0].photo} alt="Profile" className="profile-picture" />
                    <div className="info-section">
                        <h2>{farmer[0].name}</h2>
                        <p><strong>Location:</strong> {farmer[0].location}</p>
                        <p><strong>Email:</strong> {farmer[0].email}</p>
                        <p><strong>Phone:</strong> {farmer[0].contactDetails ? farmer[0].contactDetails.phone : ''}</p>
                         <p><strong>Address:</strong> {farmer[0].contactDetails ? farmer[0].contactDetails.address : ''}</p>
                        <p><strong>Market:</strong> {farmer[0].market}</p>
                        <button onClick={onEdit}>Edit Profile</button>
                    </div>
                </div>
                </div>
            }
        </>
    );
};

export default ProfileDisplay;
