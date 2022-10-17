import React from 'react';
import "./heroStyles.css"
export interface IBusinessHeroUiProps {
 width?: string;
 height?: string;
}
import GROUP_SMILES from "../../asset/groupSmiles.png";
import DefaultButton from '../../components/buttons/DefaultButton';
import businessHeroCircle from "../../asset/businessHeroCircle.png";
import GROUP_PHOTO from "../../asset/group.png";

export const BusinessHeroUi: React.FunctionComponent = (props: IBusinessHeroUiProps) => {
 return (
  <section id="hero-section">
   <section className='container'>
    <div className='hero'>
     <div className='businessHero-content'>
      <div className='businessHero-itemContainer'>
       <h2>Manage payroll, compliance & HR in real time</h2>
       <p>Make income tax remittances to the state internal revenue service for your employees.</p>
       <div className='buttonContainer'>
        <DefaultButton title="Create free account" />
       </div>
      </div>
      <img className='businessheroCircle' src={businessHeroCircle} alt="businesshero" />
     </div>
    </div>

   </section>
   <div className='groupHoto'>
    <img src={GROUP_PHOTO} alt="group_photo" />
   </div>
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
