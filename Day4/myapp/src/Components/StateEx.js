import React from 'react'
import { useState } from 'react'
import '../Assests/css/pop.css'

const StateEx=()=>{
    const[visible,setVisible]=useState(true);


const toggle =()=>
{
    setVisible(!visible)
}

setTimeout(()=>{
    setVisible(false)
},10000)
return(
    <bar>
    {visible?(
            <div className='Card-wrapper'>
                <div className='Card'>
                    <p className='cookieHead'>We use Cookies</p>
                    <p className='cookieDescription'>This website uses cookies to ensure you get the best experience</p>
                    <div className="buttonContainer">
                        <button className="acceptButton" onClik={toggle}>Allow</button>
                        <button className="declineButton" onClik={toggle}>Decline</button>
                    </div>
                </div>
            </div>
        ) :(
            <button className="src" onClick={toggle}>
                Manage cookies
            </button>
        )
    }
    </bar>
   
)
}

export default StateEx