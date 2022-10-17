import React from 'react';
import Card from '../../../components/cards/Card';

export interface IPaymentUIProps {
 width?: string;
 height?: string;
 title: string;
 caption?: string;
 icon?: string;
}

export const PaymentUI = (props: IPaymentUIProps) => {
 return (
  <Card width={props.width} height={props.height}>
   <div style={styles.container}>
    <div style={styles.innerContainer}>
     <img src={props.icon} alt="payment-icons" />
     <h5 style={styles.headerText}>{props.title}</h5>
     <p style={styles.bodyParagraph}>{props.caption}</p>
    </div>
   </div>
  </Card>
 );
};

// export default PaymentUI
const styles = {
 container: {
  width: '100%',
  display: 'flex',
  maxHeight: 'auto',
  nargin: 'auto',
  // backgroundColor: 'whitesmoke',
  padding: '30px 40px',
  alignItems: 'center',
  // justifyContent: 'center',
 },
 innerContainer: {
  display: 'flex',
  'flex-direction': 'column',
  alignItems: 'flex-start',
  padding: 0,
  gap: 20,
  width: '100%',
  height: 200,
  backgroundColor: 'white',
 },
 headerText: {
  fontFamily: 'Poppins',
  // fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '22px',
  lineHeight: '33px',
  color: '#0F0919CC',
 },
 header: {
  height: '30%',
  // alignItems: 'flex',
  flex: 1,
  gap: 40
 },
 body: {
  // padding: ' 0 20px 0 20px',
 },
 bodyParagraph: {
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: 400,
  letterSpacing: '0.02em',
  fontSize: '18px',
  lineHeight: '29px',
  color: '#0F0919CC',
  textAlign: 'left',
  opacity: 0.85
 }

}