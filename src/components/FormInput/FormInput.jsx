import React, { useRef } from 'react';
import styles from './FormInput.module.css';

export default function FormInput({inputImageUrl, placeholder}) {
  const inputRef = useRef(null);

  return (
    <div onClick={() => inputRef.current.focus()} className={styles.inputContainer} >
      <img src={inputImageUrl} alt={placeholder} />
      <input ref={inputRef} className={styles.formInput} type="text" placeholder={placeholder}/>
    </div>
  )
}
