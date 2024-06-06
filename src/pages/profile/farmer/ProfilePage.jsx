import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileDisplay from './Profile';
import ProfileEdit from './EditProfile';
import { useParams } from 'react-router-dom';
import './profilePage.css';
import Topbar from '../../../components/topbar/Topbar';
import { BASE_URL } from '../../../utils/Config';
import Footer from '../../../components/footer/Footer';

const ProfilePage = () => {
    const [farmer, setFarmer] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        fetchFarmer();
    }, [id]);

    const fetchFarmer = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/user/farmer/${id}`);
            const { data } = response;
            console.log("Data received from server:", data); // Log received data
            if (data && data.farmer) {
                setFarmer(data.farmer);
            } else {
                console.error('Invalid data format for farmer:', data);
            }
        } catch (error) {
            console.error('Error fetching farmer data:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('contactDetails.')) {
            const contactDetails = { ...farmer.contactDetails, [name.split('.')[1]]: value };
            setFarmer(prevState => ({
                ...prevState,
                contactDetails
            }));
        } else {
            setFarmer(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${BASE_URL}/api/v1/user/farmer/${id}`, farmer)
            .then(response => {
                setFarmer(response.data.farmer);
                setIsEditing(false);
                alert('Profile updated successfully');
            })
            .catch(error => {
                console.error('Error updating profile:', error);
            });
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    return (
        <>
            <Topbar />
            {farmer && (
                <div className="profile-container">
                    {isEditing ? (
                        <ProfileEdit
                            farmer={farmer}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            onCancel={handleCancel}
                        />
                    ) : (
                        <ProfileDisplay
                            farmer={farmer}
                            onEdit={handleEdit}
                        />
                    )}
                </div>
            )}
            <Footer/>
        </>
    );
};

export default ProfilePage;
