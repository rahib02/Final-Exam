import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
     <div className='footer_stat'>
         <h4>About Us</h4>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
         <p>Copyright ©2023 All rights reserved | This template is made with  by Colorlib</p>
     </div>
     <div className='footer_mid'>
         <h4>Newselter</h4>
         <label htmlFor="">Stay update with our latest</label>
         <input type="text" />
     </div>
     <div className='footer_end'>
     <h4>Follow Us</h4>
     </div>
    </div>
  )
}

export default Footer
