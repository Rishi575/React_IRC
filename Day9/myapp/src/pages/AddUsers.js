import React, { useState } from 'react'
import { addUser } from '../services/api'
import { useNavigate } from 'react-router-dom'
import '../assets/css/core.css'


export const AddUsers = () => {

  const navigate = useNavigate()
  const [data,setData] = useState({
      username:'',
      password:''
  })
  const handleChange =(e)=>{
    setData({...data,[e.target.id]:e.target.value})
  }
  const handleSubmit =async(e)=>{
    e.preventDefault();

    try{
    const res =  await addUser(data)
      if(res.status === 201){
        alert('user added')
        navigate('/')
      }

    }
    catch(e){
      console.log(e)
    }
  }
  return (
    <>
    <form onSubmit={handleSubmit} className='tab'>
        <input type='text' id='username' placeholder='Name' onChange={handleChange}/>
        <input type='text' id='password' placeholder='Password' onChange={handleChange}/>
        <button type='submit' id='submit' placeholder='Submit' className='edi-btn'>Add</button>
    </form>
    </>
  )
}

export default AddUsers
