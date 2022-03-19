import React from 'react';
import './Header.css';

const Header = ({count}) => {
    return (
        <div>
            <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <h2>Shoping Cart</h2>
                </div>
                <div className='col-md-8 header-menu'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart<sup>{count}</sup></li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;