import React from "react";
import styles from "./Task.module.css";
import taskimg from "./taskimg.png";

export default function Task({name, description, priority, status, createdAt}) {

  const statusClass = `${status === "Not Started" && styles.notstarted}
  ${status === "Completed" && styles.completed}
  ${status === "In Progress" && styles.inprogress}`;

  return (
    <li className={styles.task}>
      <span className={`${styles.taskdisc} ${statusClass}`}></span>
      <div className={styles.optionscontainer}>
        <span className={styles.options}></span>
        <span className={styles.options}></span>
        <span className={styles.options}></span>
      </div>
      <div className={styles.taskmain}>
        <div className={styles.tasktext}>
          <h1 className={styles.tasktitle}>{name}</h1>
          <p className={styles.taskdesc}>{description}</p>
        </div>
        <div className={styles.taskimg}>
          <img src={taskimg} alt={`${name} to-do image`} />
        </div>
      </div>
      <div className={styles.taskdata}>
        <p>
          Priority:{" "}
          <span
            style={{
              color: "#42ADE2",
            }}
          >
            {priority}
          </span>
        </p>
        <p>
          Status: <span className={statusClass}>{status}</span>
        </p>
        <p>Created on: {createdAt}</p>
      </div>
    </li>
  );
}
