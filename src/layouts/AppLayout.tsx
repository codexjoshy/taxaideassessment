import React from 'react';

export interface IAppLayoutProps {
 children?: React.ReactNode
}

const AppLayout: React.FunctionComponent<IAppLayoutProps> = (props) => {

 return (
  <section id='appLayout'>
   {/* <div className="container"> */}
   {props.children}
   {/* </div> */}
  </section>
 );
};

export default AppLayout;