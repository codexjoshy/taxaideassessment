import React from 'react'
import './BaseTemplate.css'
type Props = {}

function BaseTemplate({ }: Props) {
 return (
  <div style={styles.container} ></div>
 )
}

export default BaseTemplate
const styles = {
 container: {
  flex: 1
 }
}