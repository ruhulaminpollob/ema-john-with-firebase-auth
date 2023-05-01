import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../provider/AuthProvider';

const Header = () => {
    const {user}=useContext(UserContext)
    console.log(user);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                {
                    user && <Link className=''> Welcome {user.displayName}</Link>
                }
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
    );
};

export default Header;