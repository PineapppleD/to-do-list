import React from "react";
import styles from "../Sidebar.module.css";
import { useState } from "react";

export default function SideButton({ onClick, Icon, title, isActive }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`${styles.sidebarelement} ${isActive && styles.active} ${isHovered && !isActive && styles.hovered}`}
    >
      <div className={styles.sidebarelemimg}>
        <Icon color={isActive ? "#FF6767" : "#fff"} />
      </div>
      <p>{title}</p>
    </li>
  );
}
