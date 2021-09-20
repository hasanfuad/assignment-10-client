import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/orders">Order Review</Link>
                <Link to="/deals">Deals</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/login">Login</Link>
            </nav>
        </div>
    );
};

export default Header;