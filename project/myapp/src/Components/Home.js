import '../Assests/css/Home.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'
const Home = () => {
    return (
        <>
            <form className="cont">
                <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1702294687desktop_banner_(21).webp"></img>
            </form>

            {/* Shop By Category  */}
            <div className="txt"><h1>Shop By Category<br /><br /><br /></h1></div>
            <form className='age'>
                <ul><br />
                    <div className="container">
                        <div className="grid">
                            <article>
                            <Link to="sports&outdoor">
                                <li className="cat"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/17014122461694428479.webp" /></li>
                            </Link>
                            </article>

                            <article>


                                <li className="cat"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/17014146701694428480.webp" /></li>
                            </article>

                            <article>
                                <li className="cat"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/17014118541694428481.webp" /></li>


                            </article>

                            <article>

                                <li className="cat"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/17014130851694428486.webp" /></li>

                            </article>

                            <article>
                                <li className="cat"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/17014123391694428473.webp" /></li>


                            </article>

                        </div>
                    </div>

                </ul>
            </form>

            {/* Shop By Brand */}

            <div className="txt"><h1>Shop By Brand<br /><br /><br /></h1></div>
            <form className='age'>
                <ul><br />
                    <div className="container">
                        <div className="grid">
                            <article>
                                <li className="cat"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1701342031Frame_1597879841.webp" /></li>
                            </article>

                            <article>
                                <li className="cat"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1701342216Frame_1597879849.webp" /></li>
                            </article>

                            <article>
                                <li className="cat"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1701344531Frame_1597879840.webp" /></li>
                            </article>

                            <article>
                                <li className="cat"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1701344167Frame_1597879843.webp" /></li>
                            </article>

                            <article>
                                <li className="cat"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1701341899Frame_1597879844.webp" /></li>
                            </article>

                        </div>
                    </div>

                </ul>
            </form>

            {/* Age Cards */}
            <div className="txt"><h1>Shop By Age<br /><br /><br /></h1></div>
            <form className='age'>
                <ul><br />
                    <div className="container">
                        <div className="grid">
                            <article>
                                
                                <li className="siz"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/17013402621694428463.webp" /></li>
                                
                            </article>

                            <article>

                                <li className="siz"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/17013400361694428464.webp" /></li>

                            </article>

                            <article>

                                <li className="siz"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/17013434661694428466.webp" /></li>

                            </article>

                            <article>

                                <li className="siz"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/17013388851694428467.webp" /></li>

                            </article>

                            <article>

                                <li className="siz"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/17013383511694428468.webp" /></li>

                            </article>

                        </div>
                    </div>

                </ul>
            </form>

            {/*Characters */}
            <div className="txt"><h1>Shop By Characters<br /><br /><br /></h1></div>
            <form className='age'>
                <ul><br />
                    <div className="container">
                        <div className="grid">
                            {/* <article> */}
                                
                                <li className="char"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1701414054Frame_1597879679.webp" /></li>
                                
                            {/* </article> */}

                            {/* <article> */}

                                <li className="char"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1701413883Frame_1597879676.webp" /></li>

                            {/* </article> */}

                            {/* <article> */}

                                <li className="char"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1701413608Frame_1597879681.webp" /></li>

                            {/* </article> */}

                            {/* <article> */}

                                <li className="char"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1701413808Frame_1597879686.webp" /></li>

                            {/* </article> */}

                            {/* <article> */}

                                <li className="char"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1701413534Frame_1597879677.webp" /></li>

                            {/* </article> */}

                        </div>
                    </div>

                </ul>
            </form>
            {/* <div class="left-panel">
        <Link to="/Home">
            <i class="fa fa-home"></i> Home
        </Link>
        
        <Link to="/">
            <i class="fa fa-sign-out-alt"></i> Logout
        </Link>
        <Link to="/About">
            <i class="fa fa-info-circle"></i> About Us
        </Link>            
    </div> */}
            
            <Footer/>
        </>
    )
}

export default Home