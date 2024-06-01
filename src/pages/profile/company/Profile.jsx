import React from 'react';
import './profile.css';

const ProfileDisplay = ({ company, onEdit }) => {
    return (
        <>
            {company[0] &&
            <div className="profile-display">
                <div className="cover-photo">
                    <img src="https://i.ibb.co/bNY25qJ/22539f0cbe01.jpg" alt="Cover" />
                </div>
                <div className="profile-info">
                    <img src={company[0].photo} alt="Profile" className="profile-picture" />
                    <div className="info-section">
                        <h2>{company[0].name}</h2>
                        <p><strong>Location:</strong> {company[0].location}</p>
                        <p><strong>Email:</strong> {company[0].email}</p>
                        <p><strong>Phone:</strong> {company[0].contactDetails ? company[0].contactDetails.phone : ''}</p>
                         <p><strong>Address:</strong> {company[0].contactDetails ? company[0].contactDetails.address : ''}</p>
                        <p><strong>Market:</strong> {company[0].market}</p>
                        <button onClick={onEdit}>Edit Profile</button>
                    </div>
                </div>
                </div>
            }
        </>
    );
};

export default ProfileDisplay;
