import React, { useEffect, useState } from 'react'
import './navbarStyles.css'
import LOGO from '../../asset/logo.png'
import { FiAlignJustify } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import DefaultButton from '../buttons/DefaultButton';
import { useRouteContext } from '../../hooks/useRouteContext';
type Props = {}

export default function NavBar({ }: Props) {
 const [activeNav, setActiveNav] = useState(false);

 const handleNavMenu = () => setActiveNav(!activeNav);

 const { route, setRoute } = useRouteContext()
 useEffect(() => {
 }, [route])


 return (
  <section id="nav-section">
   <section className='container'>
    <div className='navbar' >
     <div className='navbar-side navbar-left '>
      <div className='logo'>
       <img src={LOGO} alt="LOGO" />
      </div>
      <ul className='nav-menu'>
       <li onClick={() => setRoute('individual')} className={route === 'individual' ? 'active' : ''}>For Individuals</li>
       <li onClick={() => setRoute('business')} className={route === 'business' ? 'active' : ''}>For Businesses</li>
      </ul>
     </div>
     <div className='navbar-side navbar-right'>
      <ul className='nav-menu'>
       <li >About Us</li>
       <li>Contact</li>
       <li className='seperator'>|</li>
       <li>Login</li>
      </ul>
      <DefaultButton title={'Create free account'} onClick={() => { }} />
      <div className="hamburger" onClick={handleNavMenu}>
       {activeNav ? <AiOutlineClose className='menu-item-icon' size={30} /> : <FiAlignJustify className='menu-item-icon' size={30} />}

      </div>
     </div>
     <div className={`mobile-menu ${activeNav && 'active'}`}>
      <ul className='mobile-menu-item'>
       <li>For Individuals</li>
       <li>For Businesses</li>
       <li>About Us</li>
       <li>Contact </li>
       <li>Login </li>
      </ul>
      <div className="mobile-menu-bottom">
       <div className="menu-icons">
        {/* <DefaultButton title='Login' onClick={() => { }} /> */}
        <DefaultButton title='Create free account' onClick={() => { }} />
       </div>
      </div>
     </div>
    </div>

   </section>

  </section>
 )
}

// export default NavBar
const styles = {
 container: {
  flex: 1
 }
}