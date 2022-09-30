import './Header.css';
import React from 'react';
import logo from './gym.jpg'

const Header = () => {
    return (
        <nav className='header'>
            {/* <img src={logo} alt="" /> */}
            <div>
                <a href="/shop">Shop</a>
                <a href="/order">Orders</a>
                <a href="/inventory">Inventroy</a>
                <a href="/about">About</a>
            </div>

        </nav>

    );
    <div> My Work list </div>

};

export default Header;