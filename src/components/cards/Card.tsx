import React from 'react'
import './cardStyles.css'
type ICardProps = {
 width?: string;
 height?: string;
 children?: React.ReactNode
}

function Card(props: ICardProps) {
 return (
  <div style={{ ...styles.container, ...{ width: props.width, height: props.height } }} className='card' >
   {props.children}
  </div>
 )
}

export default Card
const styles = {
 container: {
  margin: 5,
  flex: 1,
  // flexDirection: 'column',
 }
}