import React from 'react';
import './style.css';

export default function Form() {
  return (
    <div> 
        <div className="form">
            <div className="formContent">
                <h2>What can us do for you?</h2>
                <p>We are ready to work on a project of any complexity, 
                    <br /> whether it’s commercial or residential.</p>
                <input type="text" placeholder='Your Name*' />
                <input type="text" placeholder='Email*' />
                <input type="text" placeholder='Reason for Contacting'/>
                <input type="text" placeholder='Phone'/>
                <textarea name="Message" cols="30" rows="10" placeholder='Message'></textarea>
                <p className='req'>*indicate a required field</p>
                <button>Submit</button>
            </div>
        </div>
    </div>
  )
}
