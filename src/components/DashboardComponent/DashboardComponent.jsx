import React from "react";
import styles from "./DashboardComponent.module.css";
import Canvas from "../Canvas/Canvas";
import Task from "../Task/Task";
import todoIcon from "./images/todosIcon.svg";
import addTodoIcon from "./images/addTodoIcon.svg";
import completedIcon from "./images/completedIcon.svg";
import TaskStatus from "../TaskStatus/TaskStatus";

const tasksfortoday = [
  {
    name: "Plan Weekend Getaway",
    description:
      "Look for nearby destinations and book a hotel. Pack necessary items. (Flexible Timing)",
    priority: "moderate",
    status: "Not Started",
    createdAt: "30/11/2024",
  },
  {
    name: "Team Lunch Outing",
    description:
      "Coordinate with the team and book a table at the restaurant. (1 PM | Olive Garden)",
    priority: "low",
    status: "In Progress",
    createdAt: "01/12/2024",
  },
];

export default function DashboardComponent() {
  return (
    <div className={styles.dashboard}>
      <Canvas width={"466px"} height={"719px"} padding={"20px 23px 46px 23px"}>
        <div className={styles.todolist}>
          <header className={styles.header}>
            <div>
              <div className={styles.todologo}>
                <img src={todoIcon} alt="todo list logo image" />
                <h2 className={styles.todoHeading}>To-Do</h2>
              </div>
              <div className={styles.date}>
                <p>20 June</p>
                <p>• Today</p>
              </div>
            </div>
            <button className={styles.addTodoBtn}>
              <img src={addTodoIcon} alt="add todo icon" />
              <p>Add Task</p>
            </button>
          </header>
          <ul className={styles.todofortoday}>
            {tasksfortoday.map((task, index) => (
              <Task key={index} {...task} />
            ))}
          </ul>
        </div>
        <span className={styles.line}></span>
        <Task {...tasksfortoday[0]} />
      </Canvas>
      <div className={styles.secondcolumn}>
        <TaskStatus />
        <Canvas
          width={"423px"}
          height={"436px"}
          padding={"0"}
        >
          <p className={styles.completedtasksheader}>
            <img src={completedIcon} alt="completed tasks icon" />
            Completed Tasks
          </p>
          <div className={styles.completedtasks}>
            <Task {...tasksfortoday[0]} />
            <Task {...tasksfortoday[1]} />
          </div>
        </Canvas>
      </div>
    </div>
  );
}
