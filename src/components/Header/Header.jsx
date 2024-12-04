import React from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";
import search from "./Search.svg";
import notifications from "./notifications.svg";
import calendar from "./calendar.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        Dash<span>board</span>
      </h1>
      <div className={styles.searchbar}>
        <input type="text" placeholder="Search your task here..." />
        <Button type={"icon"} data={search} />
      </div>
      <div className={styles.rightside}>
        <Button type={"icon"} data={notifications} />
        <Button type={"icon"} data={calendar} />
        <div className={styles.date}>
          <p>Tuesday</p>
          <p style={{ color: "#3ABEFF" }}>25/11/2024</p>
        </div>
      </div>
    </header>
  );
}
