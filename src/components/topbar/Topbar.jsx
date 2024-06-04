import React, { useState, useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AuthContext } from '../../context/AuthContext';

import './topbar.css';

export default function Topbar() {
  const { user,logout } = useContext(AuthContext);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate()

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => { 
    logout(); // Call the logout function from AuthContext 
    navigate('/login'); // Navigate to the home page 
  };

  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>AgriConnect</span>
        </Link>
      </div>
      <div className="topbarCenter">
      </div>
      {user && (
        <div className="topbarRight">
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">9+</span>
          </div>
        </div>
        <div className="profileMenu">
          <img 
            src={user.photo} 
            alt="" 
            className="topbarImg" 
            onClick={toggleDropdown}
          />
          {dropdownVisible && (
            <div className="dropdownMenu">
              {user.role !== 'admin' && (
                  <Link to={`/profile/${user._id} `} className="dropdownItem">Profile</Link>
              )}
              <Link to='/' className="dropdownItem">Dashboard</Link>
              <Link to='/blog' className="dropdownItem">Advisory</Link>
              <Link to={`/setting/${user._id}`} className="dropdownItem">Setting</Link>
              <span className="dropdownItem" onClick={handleLogout}>LogOut</span>
            </div>
          )}
        </div>
      </div>
      )}
      
    </div>
  );
}
