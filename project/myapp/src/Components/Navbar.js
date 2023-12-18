import '../Assests/css/Nav.css'
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div className='stick'>
            <div className='nav'>
                <ul className="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="./About">About</Link></li>
                    <li><Link to="/Contacts">Contacts</Link></li>
                    <li><Link to="./Login">Login</Link></li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Nav;