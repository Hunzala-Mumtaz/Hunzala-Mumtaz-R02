import React from 'react'
import './style.css';
import A2 from '../../assets/About2.png';
import A1 from '../../assets/About1.png';

export default function About() {
  return (
    <div> 
         <div className="aboutUs">
            <img className='a2' src={A2} alt="" />
            <img className='a1' src={A1} alt="" />
         </div>
    </div>
  )
}
