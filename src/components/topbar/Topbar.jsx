import './topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {AuthContext} from '../../context/AuthContext'
export default function Topbar() {
  const { user } = useContext(AuthContext)
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <Link to='/' style={{textDecoration:'none'}}>
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
        <Link to='/'>
           <img src='https://i.ibb.co/4pDNDk1/avatar.png' alt="" className="topbarImg" />
        </Link>
      </div>
    </div>
  )
}
