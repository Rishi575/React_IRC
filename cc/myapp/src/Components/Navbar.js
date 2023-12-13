import '../Assets/css/Nav.css'
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <>
            <div className='nav'>
                <ul className="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contacts</a></li>
                    <li><a href="./Login">Login</a></li>
                </ul>
            </div>
        </>
    )
}

export default Nav;