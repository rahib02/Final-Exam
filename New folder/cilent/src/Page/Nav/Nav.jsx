
import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <div className='navbar'>
    <Link className='navbar_header_img' to={"/"}><img src='https://preview.colorlib.com/theme/plumber/img/logo.png.webp' alt=''/></Link>
    <div className='navbar_link_ul'>
           <ul>
            <li><Link to={"/"}>HOME</Link></li>
            <li><Link to={"/add"}>ADD</Link></li>
            <li><Link to={"/"}>SERVICES</Link></li>
            <li><Link to={"/"}>FEATURES</Link></li>
            <li><Link to={"/"}>TESTIMONAL</Link></li>
            <li><Link to={"/"}>CONTACT</Link></li>
        </ul>
    </div>
</div>
  )
}

export default Nav
