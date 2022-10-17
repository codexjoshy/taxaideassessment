import React from 'react';
import Card from '../../components/cards/Card';
import { PaymentUI } from '../../shared/cards';
import DefaultButton from '../../components/buttons/DefaultButton';
import { CallToActionUi } from '../../shared/cards/CallToActionUi';

import "./paymentToolsStyles.css"
export interface IPaymentToolsUIProps {
 width?: string;
 height?: string;
}

import moneyTransfer from "../../asset/payment/moneyTransfer.png";
import moneyTime from "../../asset/payment/moneyTime.png";
import security from "../../asset/payment/security.png";
import billRightPanel from "../../asset/billRightPanel.png";
import billCircle from "../../asset/billingCircle.png";
import mobileApp from "../../asset/mobileApp.png";
import googlePlay from "../../asset/googleplay.png";
import appstore from "../../asset/appstore.png";
import billingForm from "../../asset/billingForm.png";
import { useRouteContext } from '../../hooks/useRouteContext';

const data = [
 { icon: moneyTransfer, title: 'User Friendly', caption: 'Highly responsive and easy to navigate' },
 { icon: moneyTime, title: 'Secure', caption: 'Your data is secure. It is continuously monitored, audited, and stored in an encrypted form.' },
 { icon: security, title: 'Fast', caption: "Transacting takes only a few seconds - it's convenient and safe." },
];

const billingData = [
 { title: 'Pay bills', description: 'Paying your bills has never been so easy.', isActive: true },
 { title: 'Buy Airtime & Data', description: 'Never get caught with low airtime and data again!', isActive: false },
 { title: 'Money Transfer', description: 'Transferring money is now hassle-free.', isActive: false },
 { title: 'Pay Toll Fee', description: 'Never worry about getting a toll ticket again.', isActive: false },
];
const businessBillingData = [
 { title: 'Payment', description: 'No more checks, no more envelopes and stamps, you can pay your employees anytime, anywhere.', isActive: false },
 { title: 'Payroll', description: 'End-to-end automation of payroll management for organizations, complying with Nigerian tax law and tax optimizations for the user.', isActive: false },
 { title: 'Payslip', description: 'Generates automated TaxiTPaySlip email notifications for each employee/user.', isActive: false },
 { title: 'Reports', description: 'Generates relevant reports, such as PAYE Returns for easy compliance with filing obligations.', isActive: true },
]
export const PaymentToolsUI: React.FunctionComponent = (props: IPaymentToolsUIProps) => {
 const { route } = useRouteContext()
 const isIndividual = route === 'individual';
 const billImage = isIndividual ? billRightPanel : billingForm;
 return (
  <section id='paymentTools-section'>
   <div className='container'>
    <h3>Payments tools designed for you</h3>
    <p>Explore payment features that provides you with every posible solution</p>
    <div className='tools-grid'>
     {
      data.map((item, i) => (
       <PaymentUI icon={item.icon} caption={item.caption} title={item.title} key={i} />

      ))
     }
    </div>
    <div id="billing-section">
     <div className='left-side side'>
      <div className='billing-info'>
       {
        (route == 'individual' ? billingData : businessBillingData).map(({ title, description, isActive }, i) => (
         <div className={`billing-item ${isActive ? 'borderColor' : ''}`}>
          <h5>{title}</h5>
          <p>{description}</p>
         </div>
        ))
       }
      </div>
     </div>
     <div className='right-side side'>
      <img src={billImage} alt="billing-image-sample" />
     </div>
     <img className='billingCircle' src={billCircle} alt="billing-circle" />
    </div>
    {
     isIndividual ? (
      <div id="mobile-app-section">
       <div className='left-side side'>
        <img src={mobileApp} alt="mobile-app" />
       </div>
       <div className='right-side side'>
        <div className='mobileDescContainer'>
         <div className='mobileDesc'>
          <h2>Transact on the go</h2>
          <p>Stay on top of your business with our easy-to-use app</p>
         </div>
         <div className='mobileDesc'>
          <DefaultButton title='Get Started' />
         </div>
         <div className='mobileDesc mobileDescStore'>
          <img src={appstore} alt="ios" />
          <img src={googlePlay} alt="android" />
         </div>
        </div>
       </div>
      </div>
     ) : null
    }

    <div id="callToAction">
     <CallToActionUi title='' action='' />
    </div>
   </div>

  </section>
 );
};

const styles = {
}

// export default PaymentUI
