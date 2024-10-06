import React from 'react'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmpassword:""
})
    
        const[showPassword,setShowPassword]=useState(false);
        function ChangeHandler(event){
            setFormData((prevData)=>(
             {
                 ...prevData,
                 [event.target.name]:event.target.value
             }
            ))
         } 
        return (
    <div>
        <div>
            <button>
               Student
            </button>
            <button>
             Instructor
            </button>
        </div>
        <form>
          <div>
          <label>
            <p>Firstname<sup>*</sup></p>
            <input
            required
            type="text"
            onChange={ChangeHandler}
            name='firstname'
            placeholder='Enter your FirstName'
            value={formData.firstname}
            />
           </label>
           <label>
            <p>Lastname<sup>*</sup></p>
            <input
            required
            type="text"
            onChange={ChangeHandler}
            name='lastname'
            placeholder='Enter your LastName'
            value={formData.lastname}
            />
           </label>
          </div>
           <label>
            <p>Email Address<sup>*</sup></p>
            <input
            required
            type="email"
            onChange={ChangeHandler}
            name='email'
            placeholder='Enter your email address'
            value={formData.email}
            />
           </label>
          <div>
          <label>
            <p>Create Password<sup>*</sup></p>
            <input
            required
            type={showPassword ?("text"):("password")}
            onChange={ChangeHandler}
            name='password'
            placeholder='Enter password'
            value={formData.password}
            />
            <span onClick={()=>setShowPassword((prev)=> !prev)}>
            {showPassword ?(<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
           </span>
           </label>
           
           <label>
            <p>Confirm Password<sup>*</sup></p>
            <input
            required
            type={showPassword ?("text"):("password")}
            onChange={ChangeHandler}
            name='confirmpassword'
            placeholder='Confirm password'
            value={formData.confirmpassword}
            />
            <span onClick={()=>setShowPassword((prev)=> !prev)}>
            {showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>) }
           </span>
           </label>
          </div>
          <button>
            Create Account
          </button>
        </form>
    </div>
  )
}

export default SignupForm