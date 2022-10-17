import React from 'react';
import DefaultButton from '../../../components/buttons/DefaultButton';
import Card from '../../../components/cards/Card';
import payBg from "../../../asset/payBg.png";

export interface ICallToActionUiProps {
 title: string;
 action: string;
}

export const CallToActionUi = ({ title, action }: ICallToActionUiProps) => {
 return (
  <Card width='100%' height='50%' >
   <div className='callToAction' style={styles.container}>
    <div className='callToAction' style={styles.action}>
     <h3 style={styles.titleText}>Send funds</h3>
     <h3 style={styles.text}>Remit taxes</h3>
     <h3 style={styles.text}>Buy utilities</h3>
     <div style={styles.buttonCont}>
      <DefaultButton title="Get Started" color='white' />
     </div>
    </div>
    <div style={styles.overlay}>
     <img src={payBg} alt="icon" style={styles.image} />
    </div>
   </div>
  </Card>
 );
};
const styles = {
 container: {
  display: 'flex',
  width: '100%',
  height: '100%',
  position: 'relative',
  padding: '7rem 0',

 },
 action: {
  width: '30%',
  zIndex: 1,
 },
 titleText: {
  color: 'white'
 },
 text: {
  color: 'white',
  fontWeight: '200',
 },

 overlay: {
  position: 'absolute',
  background: "rgba(92, 178, 58, 0.8)",
  width: '100%',
  height: '100%',
  top: 0,
  left: 0
  // display: 'flex'
 },
 image: {
  width: '100%', height: '100%'
 },
 buttonCont: {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
 }
}

