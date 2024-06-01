import React from 'react';
import './ProfileEdit.css';

const ProfileEdit = ({ farmer, handleChange, handleSubmit, onCancel }) => {
    return <>
        {farmer &&
        <div className="profile-edit">
            <div className="cover-photo">
                <img src="https://i.ibb.co/bNY25qJ/22539f0cbe01.jpg" alt="Cover" />
            </div>
            <div className="profile-info">
                <img src={farmer[0].photo} alt="Profile" className="profile-picture" />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" name="name" value={farmer[0].name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Location:</label>
                        <input type="text" name="location" value={farmer[0].location} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" value={farmer[0].email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Phone:</label>
                        <input type="text" name="contactDetails.phone" value={farmer[0].contactDetails.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Address:</label>
                        <input type="text" name="contactDetails.address" value={farmer[0].contactDetails.address} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Market:</label>
                        <input type="text" name="market" value={farmer[0].market} onChange={handleChange} />
                    </div>
                    <button type="submit">Update Profile</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
                </form>
            </div>
            </div>
        }
    </>
};

export default ProfileEdit;
