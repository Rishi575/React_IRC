import './assets/css/style.css'
import Nav from './components/nav'
function App(){
    return(
        <div>
            <Nav/>
           
            <container>
             <center>
              {/* <form className="input"><br/> */}
                 
                <input type="email" placeholder="Email" id="mail"/><br></br>
                
                <input type="password" placeholder="Password" id="pass"/><br></br>
              
                <input type="submit" value="Login"/><br></br>
                
                <a>or</a><br></br>
                <a href="demo.html">Register here</a><br/><br/>
            {/* </form> */}
        </center>
        
    </container>  
        </div>
        
    )
}
export default App