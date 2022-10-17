import React from 'react'
import './footerStyles.css'
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

import LOGO from '../../asset/logo.png';
type Props = {}

function Footer({ }: Props) {
 return (
  // <div style={styles.container} >
  <footer>
   <div className='footer-logoContainer'>
    <div>
     <img src={LOGO} alt="logo" />
    </div>
    <div className='footer-socialIcons'>
     <FiInstagram color='grey' />
     <FiFacebook color='grey' />
     <FiTwitter color='grey' />
    </div>
    <p>2015-2022 Taxaide Technologies Limited. All rights reserved</p>
   </div>
   <div className='footer-serviceContainer'>
    <div className='footer-serviceList'>
     <div>
      <h3>About Us</h3>
      <ul>
       <li>About</li>
       <li>Legal & Privacy</li>
      </ul>
     </div>
     <div>
      <h3>Products</h3>
      <ul>
       <li>TBook</li>
       <li>TaxiTWithold</li>
       <li>TaxiTPayroll</li>
      </ul>
     </div>
    </div>
   </div>

  </footer>
  // </div>
 )
}

export default Footer
const styles = {
 container: {
  flex: 1
 }
}