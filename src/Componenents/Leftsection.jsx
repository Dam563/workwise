import React from 'react';
import logo from '../Images/cm-logo.png';
import mainimage from '../Images/cm-main-img.png';

const Leftsection = () => {
  return (
    <div>   
        <div className="left-section">
        <img src={logo} alt="" className='logo-img' />
        <p className='logo-text'>Workwise, is a global freelancing platform and social
          networking where businesses and independent 
          professionals connect and collaborate remotely</p> 
          <img src={mainimage} alt="" className='main-image'/>
      </div>
    </div>
   
  )
}

export default Leftsection