import './Header.css';
import React from 'react';
import logo from './body.webp'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <h2>Fitness Club</h2>
            <div>
                {/* <a href="/shop">Shop</a>
                <a href="/order">Orders</a>
                <a href="/inventory">Inventroy</a> */}
                {/* <a href="/about">About</a> */}
            </div>
        </nav>
    );

};

export default Header;