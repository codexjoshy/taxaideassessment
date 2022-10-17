import React from 'react'
import './buttonStyle.css'
type IButtonProps = {
 title: string,
 onClick?: () => void,
 color?: 'white' | 'success',
}
const DEFAULT_COLOR_CLASS = {
 white: 'btn btn-white',
 success: 'btn btn-success',
}

function DefaultButton({ title, onClick, color = 'success' }: IButtonProps) {
 let btnClass = DEFAULT_COLOR_CLASS[color];
 return (
  <button className={btnClass} onClick={onClick}>
   {title}
  </button>
 )
}

export default DefaultButton
const styles = {
 button: {
  padding: 15,
  borderRadius: 20
 }
}