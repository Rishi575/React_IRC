import '../Assests/css/Footer.css'
import Rock from '@mui/icons-material/Facebook';
import Insta from '@mui/icons-material/Instagram';
import Twiter from '@mui/icons-material/Twitter';
import Youtube from '@mui/icons-material/YouTube';

const Footer =()=>{
    return(
        <>
              <form>
                    <h3 className="foot">FREE RETURNS WITHIN 30 DAYS*</h3>
                </form>
                <form className='ali'>
                <form className='foot1'>
                        <h3>Most Loved Ones</h3>
                    <ul>
                        <li>Toys and games</li>
                        <li>School & Travel</li>
                        <li>Sports & Outdoor</li>
                        <li>Ride-Ons And Cycles</li>
                        <li>Gadgets</li>
                        <li>Books</li>
                    </ul>
                </form>

                <form className='foot1'>
                        <h3>Most Searched</h3>
                    <ul>
                        <li>Lego</li>
                        <li>Soft Toys</li>
                        <li>Hot Wheels</li>
                        <li>Nerf</li>
                        <li>Barbie</li>
                        <li>School Bags - Back To School</li>
                    </ul>
                </form>
                <form className='foot1'>
                        <h3>About</h3>
                    <ul>
                        <li>Blogs</li>
                        <li>Our Toy Story</li>
                        <li>Store Locator</li>
                        <li>Career</li>
                        <li>Buy Luxe Gift Card</li>
                    </ul>
                </form>

                <form className='foot1'>
                        <h3>Support</h3>
                    <ul>
                        <li>My Account</li>
                        <li>Customer Care</li>
                        <li>Track Order</li>
                        <li>Cancel/Return Order</li>
                        <li>Sitemap</li>
                    </ul>
                </form>

                <form className='foot1'>
                        <h3>Newsletter</h3>
                    <ul>
                        <li>Subscribe to hear about new products and stores.</li>
                        
                    </ul>
                </form>
                </form>
                <p className='par'>hello</p>
                <form className='ali'>
                    <form className="foot2">
                    <ul>
                        <li>Privacy & <br/>Cookies</li>
                    </ul>
                    </form>
                    <form className="foot2">
                    <ul>
                        <li>Terms And<br/> Conditions</li>
                    </ul>
                    </form>
                    <form className="foot2">
                    <ul>
                        <li>Sale Terms & <br/>Conditions</li>
                    </ul>
                    </form>
                    <form className="foot2">
                    <ul>
                        <li>Delivery <br/>Policy</li>
                    </ul>
                    </form>
                    <form className="foot2">
                    <ul>
                        <li>Return/Refunds<br/> Policy</li>
                    </ul>
                    </form>
                    <form className="foot2">
                    <ul>
                        <li>Fees & Payment <br/>  Policy</li>
                    </ul>
                    </form>
                    <form className="foot3">
                    <ul>
                        <li><a href='https://www.facebook.com/Hamleys.IN/'><Rock sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /></a></li>
                        <li><a href='https://www.instagram.com/hamleys_india/'><Insta sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /></a></li>
                        <li><a href='https://twitter.com/hamleys_india'><Twiter sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /></a></li>
                        <li><a href='https://www.youtube.com/channel/UCt7vrYvbxP-A2JztZrLaJ4Q'><Youtube sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /></a></li>
                    </ul>
                    </form>
                </form>
        </>
    )
}

export default Footer