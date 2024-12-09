import React from 'react';
import styles from './Button.module.css';


export default function Button({orange=false, onClick, type, data}) {
  return (
    <button onClick={onClick} className={`${type === 'text' ? styles.textButton : styles.iconButton} ${styles.button}
    ${orange ? styles.oran : ''}`}>
        {type === 'icon' ? <img src={data} /> : <span>{data}</span>}
    </button>
  )
}
