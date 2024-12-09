import React from "react";
import styles from "./TaskTemplate.module.css";
import Canvas from "../../../components/Canvas/Canvas";
import TaskList from "../../../components/TaskList/TaskList";
import TaskDetails from "./TaskDetails/TaskDetails";

export default function TaskTemplate({ pageName }) {
  return (
    <div className={styles.tasktemplate}>
      <Canvas padding={"20px"} width={"423px"} height={"800px"}>
        <h2 className={styles.pagetitle}>
          {pageName}
          <span className={styles.line}></span>
        </h2>
        <TaskList />
      </Canvas>
      <TaskDetails />
    </div>
  );
}
