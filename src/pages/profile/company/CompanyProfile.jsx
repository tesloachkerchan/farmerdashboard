import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileDisplay from './Profile';
import ProfileEdit from './CompanyEditProfile';
import { useParams } from 'react-router-dom';
import './profilePage.css';
import Topbar from '../../../components/topbar/Topbar';

const CompanyProfile = () => {
    const [company, setCompany] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        fetchCompany();
    }, [id]);

    const fetchCompany = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/v1/user/company/${id}`);
            const { data } = response;
            console.log("Data received from server:", data); // Log received data
            if (data && data.company) {
                setCompany(data.company);
            } else {
                console.error('Invalid data format for company:', data);
            }
        } catch (error) {
            console.error('Error fetching company data:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('contactDetails.')) {
            const contactDetails = { ...company.contactDetails, [name.split('.')[1]]: value };
            setCompany(prevState => ({
                ...prevState,
                contactDetails
            }));
        } else {
            setCompany(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4000/api/v1/user/company/${id}`, company)
            .then(response => {
                setCompany(response.data.company);
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
            {company && (
                <div className="profile-container">
                    {isEditing ? (
                        <ProfileEdit
                            company={company}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            onCancel={handleCancel}
                        />
                    ) : (
                        <ProfileDisplay
                            company={company}
                            onEdit={handleEdit}
                        />
                    )}
                </div>
            )}
        </>
    );
};

export default CompanyProfile;
