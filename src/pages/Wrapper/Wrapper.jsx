import React from "react";
import styles from "./Wrapper.module.css";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Wrapper({ children }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Sidebar />
      <div className={styles.main}>{children}</div>
    </div>
  );
}
