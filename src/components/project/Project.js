import React from 'react';
import './style.css';
import pc1 from '../../assets/PC1.png';
import pc2 from '../../assets/PC2.png';
import pc3 from '../../assets/PC3.png';
import pc4 from '../../assets/PC4.png';
import navigation from '../../assets/navigation.png';

export default function Project() {
  return (
    <div> 
        <div className="project">
            <div className='projectContainer'>
                <p>Project</p>
                <div className="sideBar">
                 <ul>
                     <li><span>All</span></li>
                     <li>Commercial</li>
                     <li>Residential</li>
                     <li>Other</li>
                 </ul>
                </div>
                <div className="projectCard">
                    <img src={pc1} alt="" />
                    <img src={pc2} alt="" />
                    <img src={pc3} alt="" />
                    <img src={pc4} alt="" />
                    <img src={navigation} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
