import React from "react";
import styles from "./AddTaskModal.module.css";
import Title from './Title'

export default function PriorityList() {
  const list = [
    {
      text: "Extreme",
      color: "#F21E1E",
    },
    {
      text: "Moderate",
      color: "#3ABEFF",
    },
    {
      text: "Low",
      color: "#05A301",
    },
  ];

  return (
    <>
      
      <ul className={styles.prioritylist}>
        {list.map((item, index) => (
          <li key={index} className={styles.listitem}>
            <label className={styles.label} htmlFor={index}>
              <div
                style={{ backgroundColor: item.color }}
                className={styles.disc}
              ></div>
              <p className={styles.priority}>{item.text}</p>
            </label>
            <input type="checkbox" name="" id={index} />
          </li>
        ))}
      </ul>
    </>
  );
}
