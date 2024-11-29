import React from 'react';
import search from './Search.svg';
import styles from './Button.module.css';


export default function Button({onClick, type, data}) {
  return (
    <button onClick={onClick} className={`${type === 'text' ? styles.textButton : styles.iconButton} ${styles.button}`}>
        {type === 'icon' ? <img src={data} /> : <span>{data}</span>}
    </button>
  )
}
