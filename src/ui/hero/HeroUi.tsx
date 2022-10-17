import React from 'react';
import "./heroStyles.css"
export interface IHeroUIProps {
 width?: string;
 height?: string;
}
import GROUP_SMILES from "../../asset/groupSmiles.png";
import DefaultButton from '../../components/buttons/DefaultButton';
import { useRouteContext } from '../../hooks/useRouteContext';
import { BusinessHeroUi } from './BusinessHeroUi';

export const HeroUi: React.FunctionComponent = (props: IHeroUIProps) => {
 const { route, setRoute } = useRouteContext()
 if (route === "business") {
  return <BusinessHeroUi />
 }
 return (
  <section id="hero-section">
   <section className='container'>
    <div className='hero'>
     <div className='hero-content'>
      <div className='hero-left'>
       <div className='hero-textContainer' >
        <h2>Secure & Seamless online transactions</h2>
        <p>Providing you with the best online payment experience </p>
        <DefaultButton title='Create free account' />
       </div>
      </div>
      <div className='hero-right'>
       <div className='hero-innerContainer' >
        <img style={styles.img} src={GROUP_SMILES} />
       </div>
      </div>
     </div>
    </div>

   </section>
  </section>
 );
};

const styles = {
 imgContainer: {
  width: '100%',
  // height: '80%',s
  padding: '1rem 0 0 0'
 },
 heroTextContainer: {
  margin: 'auto',
  height: '50%',
  padding: '1rem 0 0 2rem',
  width: '100%',

 },
 img: {
  'width': '100%',
  'height': '100%',
 }
}

// export default PaymentUI
