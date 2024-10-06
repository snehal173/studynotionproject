import React from 'react'
import LoginForm from './Loginform'
import SignupForm from './Signupform'
import {FcGoogle} from "react-icons/fc"
import frameImage from "../assets/frame.png"
const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {
  return (
    <div className='w-full bg-black text-white'>
        <div>
            <h1>
                {title}
            </h1>
            <p>
               <span>{desc1}</span>
               <span>{desc2}</span>
            </p>
             {formtype === "signup" ?
             (<SignupForm setIsLoggedIn = {setIsLoggedIn}/>):
             (<LoginForm setIsLoggedIn = {setIsLoggedIn} />)}

             <div>
                <div></div>
                <p>OR</p>
                <div></div>
             </div>
             <button>
                <FcGoogle/>
                <p>Sign Up with Google</p>
             </button>
        </div>
        <div>
            <img src={frameImage}
                 alt="pattern"
                 width={558}
                 height={504}
                 loading="lazy"
               />
                <img src={image}
                 alt="students"
                 width={558}
                 height={490}
                 loading="lazy"
               />
        </div>
    </div>
  )
}

export default Template