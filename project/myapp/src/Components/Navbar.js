import '../Assests/css/Nav.css'
import { Link } from 'react-router-dom';
import * as React from 'react';

const Nav = () => {
    return (
        // <div className='stick'>
            <div className='nav'>
                    <div className='logo'><img src="https://www.hamleys.com/media/logo/websites/1/logo.png"/></div>
                <ul className="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="./Login">Track orders</Link></li>
                    <li><Link to="./Login">Login</Link></li> 
                    <li><Link to="./Contacts">My Bag</Link></li>
                </ul>
            </div>
        // </div>
    )
}

export default Nav;