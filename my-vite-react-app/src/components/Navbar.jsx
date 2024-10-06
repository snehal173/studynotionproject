import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../assets/Logo.svg"
import {toast} from 'react-hot-toast';

const Navbar = (props) => {
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
  return (
   <div className='w-full fixed bg-black text-white  p-3 flex justify-evenly'>
    <Link to="/">
       <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
    </Link>

    <nav >
        <ul className='flex gap-3  ml-7 mr-5 '>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
     <div className=' flex gap-3 ml-7 mr-5 '>
        {  !isLoggedIn &&
            <Link to="/login">
            <button>Login</button>
            </Link>
        }
        {  !isLoggedIn &&
            <Link to="/signup">
            <button>
                SignUp</button>
            </Link>
        }
       { isLoggedIn &&
         <Link to="/dashboard">
         <button>Dashboard</button>
         </Link>
       }
       { isLoggedIn &&
         <Link to="/">
         <button  onClick={() => {
                        setIsLoggedIn(false);
                        toast.error("Logged Out");
                    }}>
            Logout</button>
         </Link>
       }
    </div>
   </div>
  )
}

export default Navbar