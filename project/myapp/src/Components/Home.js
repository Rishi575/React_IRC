import '../Assests/css/Home.css'
const Home =()=>{
    return(
        <>
            <form className="cont">
                <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1702294687desktop_banner_(21).webp"></img>
            </form>     
            <form className='age'>
               <center> <h1 className="txt">Shop by age<br/></h1></center>
                <ul><br/>
                    <li className="age"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/17013402621694428463.webp" /></li>
                    <li className="age"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/17013400361694428464.webp" /></li>
                    <li className="age"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/17013434661694428466.webp" /></li>
                    <li className="age"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/17013388851694428467.webp" /></li>
                    <li className="age"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/17013383511694428468.webp" /></li>
                </ul>
            </form>   
            <form className='cat'>
               <center> <h1 className="txt">Shop by Category<br/></h1></center>
                <ul><br/>
                    
                    <li className="cat"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/17014122461694428479.webp" /></li>
                    <li className="cat"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/17014146701694428480.webp" /></li>
                    <li className="cat"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/17014118541694428481.webp" /></li>
                  
                </ul>
            </form> 

            <form className='bra'>
               <center> <h1 className="txt">Shop by Brand<br/></h1></center>
                <ul><br/>
                    
                    <li className="bra"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1701342216Frame_1597879849.webp" /></li>
                    <li className="bra"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1701344167Frame_1597879843.webp" /></li>
                    <li className="bra"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1701341899Frame_1597879844.webp" /></li>
                    <li className="bra"><img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1701341967Frame_1597879836.webp" /></li>
                  
                </ul>
            </form> 
            <form className='vid'>
            <video width="600" height="400" controls autoPlay muted>
                <source src="https://hmadmin.hamleys.in/videos/1697525828paw%20patrol%20(2164%20x%201154%20px).mp4" type="video/mp4" />
            </video>
            </form> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <form>
            <h3 className="foot">FREE RETURNS WITHIN 30 DAYS*</h3>
            </form>

        </>
    )
}

export default Home