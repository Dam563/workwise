import React from 'react';
import './Home.css';
import username from '../../Images/username.png';
import password from '../../Images/password.png';
import Leftsection from '../../Componenents/Leftsection';
import { NavLink } from 'react-router-dom';
import Footer from '../../Componenents/Footer';


const Home = () => {
  return (
    <div className="homepage">
    <div className="home">
        <Leftsection />
        <div className='border-line'></div>
      <div className='right-section'>
        <nav>
        <NavLink to ="/"><button className='btn1'>Sign in</button></NavLink>
        <NavLink to ="./Signup"><button className="btn2">Sign Up</button></NavLink>
        </nav>
        <div>
          <p className='sign-in'>Sign in</p>
          <div >
          <input type="username" placeholder='Username' className='user-input'/>
          <img src={username} alt="" className='user-name'/>
          </div> <br />
          <div className='user'>
          <input type="password" placeholder="Password" className='user-input'/>
          <img src={password} alt="" className='password'/>
          </div>
          <div className='backup'>
            <div>
            <input type="checkbox" />
            <p className='remember'>Remember Me</p>
            </div>
            <p className='forget-password'>Forget Password?</p>
          </div>
          <button className="btn-3">Sign In</button>
        </div>
      </div>
      </div>
      <Footer />
     
    </div>
   
  )
}

export default Home