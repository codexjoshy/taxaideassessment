import React from 'react'
import Footer from '../../components/footer/Footer';
import "./footerStyles.css";
type Props = {}

export function FooterUi({ }: Props) {
 return (
  <section id='footer-section'>
   <div className='container'>
    <Footer />
   </div>
  </section>
 )
}

