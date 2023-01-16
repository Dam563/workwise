import React from 'react';
import './Signup.css';
import username from '../../Images/username.png';
import password from '../../Images/password.png';
import Leftsection from '../../Componenents/Leftsection';
import { NavLink } from 'react-router-dom';
import Footer from '../../Componenents/Footer';

const Signup = () => {
  return (
    <div>
    <div className="home">
        <Leftsection />
        <div className='border-line'></div>
        <div className="right-section">
        <NavLink to ="/"><button className='btn1'>Sign in</button></NavLink>
        <NavLink to ="./Signup"><button className="btn2">Sign Up</button></NavLink>
        <div className="user-details">
            <p>johndoe@example.com</p>
            <button className="btn1">User</button>
            <button className="btn2">Company</button>
        </div>
        <div className="input-fields">
            <div>
            <input type="text" placeholder='Full name' className='user-input'/>
            <img src={username} alt="" className='user-names' /> </div>
            <div><input type="text" placeholder='Country' className='user-input'/></div> <br /> <br /> <br />
            <div><input type="text" placeholder='Category' className='user-input'/></div> <br /> <br /> <br />
            <div className="user">
            <input type="password" placeholder="Password" className='user-input'/>
          <img src={password} alt="" className='usernames'/>
            </div>
            <div className="user">
            <input type="password" placeholder="Repeat Password" className='user-input'/>
          <img src={password} alt="" className='usernames'/>
            </div>
        </div>
        <div className='backups'>
            <input type="checkbox" />
            <p className='terms'>Yes, I understand and agree to the workwise Terms & Conditions.</p>
             </div>
             <button className="btn-3">Get Started</button>
        </div>
         
    </div>
    <Footer />
    </div>
  )
}

export default Signup;