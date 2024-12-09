import React from "react";
import styles from "./Input.module.css";

export default function Input({ type, placeholder, value, onchange }) {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onchange}
    />
  );
}
