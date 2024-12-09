import React from 'react';
import styles from '../TaskTemplate.module.css';
import Canvas from '../../../../components/Canvas/Canvas';
import taskImage from './images/taskimg.png';
import deletebtn from './images/deletebtn.svg';
import Button from '../../../../components/Button/Button';



export default function TaskDetails({}) {
  return (
    <Canvas padding={"20px"} width={"511px"} height="800px">
        <div className={styles.header}>
          <img src={taskImage} alt="task image" />
          <div className={styles.text}>
            <h1 className={styles.title}>Submit Documents</h1>
            <p className={styles.priority}>Priority: Extreme</p>
            <p className={styles.status}>Status: Not Started</p>
            <p className={styles.createdat}>Created At: 20/12/2024</p>
          </div>
        </div>
        <div className={styles.taskdetails}>
          <p className={styles.tasktitle}>Task Title: <span>Smth</span></p>
          <p className={styles.taskobjective}>Objective: <span>Smth</span></p>
          <p className={styles.taskdescription} >Task Description: <span>Smth</span></p>
          <p className={styles.notes}>Additional Notes: <span>Smth</span></p>
          <p className={styles.deadline}>Deadline: <span>Smth</span></p>
        </div>
        <div className={styles.buttons}>
          <Button type={"icon"} data={deletebtn}/>
          <Button type={"icon"} data={deletebtn}/>
        </div>
      </Canvas>
  )
}
