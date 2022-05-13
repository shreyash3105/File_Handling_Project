import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../Context';
import './nav.css';

const UserNavbar = () => {
    const {value,setValue}=useContext(UserContext)
    return (
        <div>
            <div className="nav">
                <ul>
                    <li className='user-profile'>{value.firstName} {value.lastName}</li>
                    <li><Link to="/userHome" style={{color:"white", "text-decoration":"none"}}>Home</Link></li>
                    <li><Link to="/list" style={{color:"white", "text-decoration":"none"}}>List Files</Link></li>
                    <li><Link to="/uploadFile" style={{color:"white", "text-decoration":"none"}}>Upload File</Link></li>
                    <li><Link to='/' style={{color:"white", "text-decoration":"none"}}>Logout</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default UserNavbar;