import {useState} from "react"
import '../Assests/css/pop.css'


const Nav =()=>{

    const [data,setData]=useState({
        name:'',
        pass:''
    })

    const handlechange =(e)=>{
        setData({...data,[e.target.id]:e.target.value})
        console.log(data)
    }
    
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log("final data")
        console.log(data)
        //alert('submited')
    }

    return(
        <>
        <nav>
        <ul id="navbar">
            <li><a href="/">Home</a></li>
            <li><a href="/">Login</a></li>
        </ul>
        </nav>
        <div>   
      
    <form className="container" onSubmit={handleSubmit}>
     <center>
      {/* <form className="input"><br/> */}
         
        <input type="text" placeholder="Username" id="name" onChange={handlechange}/><br></br>
        
        <input type="password" placeholder="Password" id="pass" onChange={handlechange}/><br></br>
      
        <button>Login</button>
        <button>Cancel</button>
     </center>
    </form>  
</div>
        </>
    )
}

export default Nav;