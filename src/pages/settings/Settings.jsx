// src/pages/settings/Settings.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./settings.css";
import Topbar from "../../components/topbar/Topbar";
import { BASE_URL } from '../../utils/Config';

export default function Settings() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    const fetchFarmer = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/user/farmer/setting/${id}`);
        const farmer = response.data
        setFormData({
          name: farmer.name,
          email: farmer.email,
          password: '' // Passwords should not be pre-filled
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchFarmer();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${BASE_URL}/api/v1/user/update/farmer/setting/${id}`, formData);

      console.log(response.data);
      // Optionally, show a success message or redirect
    } catch (error) {
      console.error(error);
      // Optionally, show an error message
    }
  };

  return (
    <>
      <Topbar />
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsTitleUpdate">Update Your Privacy</span>
          </div>
          <form className="settingsForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" placeholder="Full Name" name="name" value={formData.name} onChange={handleChange} />
            <label>Email</label>
            <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
            <label>Password</label>
            <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
            <button className="settingsSubmitButton" type="submit">Update</button>
          </form>
        </div>
      </div>
    </>
  );
}
