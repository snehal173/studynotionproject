import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
const LoginForm = ({setIsLoggedIn}) => {
    const [formData,setFormData]=useState({
        email:"",password:""})

    const[showPassword,setShowPassword]=useState(false);

    function changeHandler(event){
       setFormData((prevData)=>(
        {
            ...prevData,
            [event.target.name]:event.target.value 
        }
       ))
    } 
    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        // toast.success("Logged In");
        console.log("Printing the formData ");
        console.log(formData)
        // navigate("/dashboard");
    }
  return (
    
<form onSubmit={submitHandler}>
    <label>
        <p>
            Email Address <sup>*</sup>
        </p>
        <input
         required
         type="text"
         value={formData.email}
         onChange={changeHandler}
         placeholder='Enter your Email id'
         name='email'
        />
    </label>


    <label>
        <p>
           Password<sup>*</sup>
        </p>
        <input
         required
         type={showPassword?("text"):("password")}
         value={formData.password}
         onChange={changeHandler}
         placeholder='Enter Password'
         name='password'
        />
        <span onClick={()=>setShowPassword((prev)=> !prev)}>
            {showPassword ? (<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
        </span>
        <Link to="#">
        <p>Forget Password</p>
        </Link>
    </label>
    <button>
            Sign In
    </button>
</form>
   
  )
}

export default LoginForm