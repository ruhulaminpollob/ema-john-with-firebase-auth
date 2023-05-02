import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(UserContext)
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then((result) => {

            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                {
                    user && <Link className=''> Welcome {user.email}</Link>
                }
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>


                {
                    user ?
                        <button className='btn btn-outline btn-info ml-3' onClick={handleLogOut}>Log Out</button> :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>
                }
            </div>
        </nav>
    );
};

export default Header;