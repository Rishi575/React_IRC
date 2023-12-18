import {useState,useRef} from "react"
import '../Assets/pop.css'


const Nav =()=>{

    const unameInputRef=useRef(null);
    const passInputRef=useRef(null)

    // const [data,setData]=useState({
    //     name:'',
    //     pass:''
    // })

    // const handlechange =(e)=>{
    //     setData({...data,[e.target.id]:e.target.value})
    //     console.log(data)
    // }
    
    const handleSubmit =(e)=>{
        e.preventDefault()

        const formData={

            username:unameInputRef.current.value,
            password:passInputRef.current.value


        }
        console.log(formData)
        unameInputRef.current.value=('')
        passInputRef.current.value=('')
        unameInputRef.current.focus();
        // console.log(data)
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
        <div className="form-wrap">
        <div>   
      
    <form className="container" onSubmit={handleSubmit}>
     <center>
      {/* <form className="input"><br/> */}
         
        <input type="text" placeholder="Username" id="name" ref={unameInputRef}/><br></br>
        
        <input type="password" placeholder="Password" id="pass" ref={passInputRef}/><br></br>
      
        <button>Login</button>
        <button>Cancel</button>
     </center>
    </form>  
</div>
</div>
        </>
    )
}

export default Nav;