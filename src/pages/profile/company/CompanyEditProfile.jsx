import React from 'react';
import './ProfileEdit.css';
import cover from '../../../assets/cover.jpg'

const CompanyEditProfile = ({ company, handleChange, handleSubmit, onCancel }) => {
    return <>
        {company &&
        <div className="profile-edit">
            <div className="cover-photo">
                <img src={cover} alt="Cover" />
            </div>
            <div className="profile-info">
                <img src={company[0].photo} alt="Profile" className="profile-picture" />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" name="name" value={company[0].name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Location:</label>
                        <input type="text" name="location" value={company[0].location} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" value={company[0].email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Phone:</label>
                        <input type="text" name="contactDetails.phone" value={company[0].contactDetails.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Address:</label>
                        <input type="text" name="contactDetails.address" value={company[0].contactDetails.address} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Market:</label>
                        <input type="text" name="market" value={company[0].market} onChange={handleChange} />
                    </div>
                    <button type="submit">Update Profile</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
                </form>
            </div>
            </div>
        }
    </>
};

export default CompanyEditProfile;
