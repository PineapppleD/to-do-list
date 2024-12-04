import React from "react";
import styles from "./StatusDisc.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function StatusDisc({ color, categoryName }) {
  const percentage = 66;

  return (
    <li className={styles.statusdisc}>
      <CircularProgressbar
        className={styles.circularbar}
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          strokeLinecap: "butt",
          textSize: "20px",
          pathColor: color,
          textColor: "#000",
        })}
      />
      <p className={styles.categoryName}>
        <span style={{
          backgroundColor: color,
          width: "7px",
          height: '7px',
          display: "block",
          borderRadius: "100%",
        }}
      ></span> {categoryName}</p>
    </li>
  );
}
