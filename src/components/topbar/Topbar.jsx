import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AuthContext } from '../../context/AuthContext';
import './topbar.css';

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    // Implement logout functionality
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
            src='https://i.ibb.co/4pDNDk1/avatar.png' 
            alt="" 
            className="topbarImg" 
            onClick={toggleDropdown}
          />
          {dropdownVisible && (
            <div className="dropdownMenu">
              <Link to={`/profile/${user._id} `} className="dropdownItem">Profile</Link>
              <Link to='/' className="dropdownItem">Dashboard</Link>
              <Link to='/blog' className="dropdownItem">Advisory</Link>
              <span className="dropdownItem" onClick={handleLogout}>LogOut</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
