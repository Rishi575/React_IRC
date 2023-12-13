import '../Assests/css/Nav.css'
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <>
            <div className='nav'>
                <ul className="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Contacts</Link></li>
                    <li><Link to="./Login">Login</Link></li>
                    
                </ul>
            </div>
        </>
    )
}

export default Nav;