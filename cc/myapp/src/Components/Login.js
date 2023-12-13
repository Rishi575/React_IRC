import '../Assets/css/Login.css'

const Login =()=>{
    return(
        <>
         <form className="container">
             <div id="cont"><br/>
                <input type="text" placeholder="Username" id="name" /><br/>
        
                <input type="password" placeholder="Password" id="pass" /><br/>
      
                <input type="submit" placeholder="Login" /><br/><br/>
             </div>
         </form>  
        </>
    )
}

export default Login;
