import React from 'react';
import styles from './Canvas.module.css';


export default function Canvas({width, height, padding, children}) {
  return (
    <div style={{
      width, 
      height, 
      padding,
    }} className={styles.canvas}>
        {children}
    </div>
  )
}
