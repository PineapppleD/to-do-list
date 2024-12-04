import React from 'react';
import Canvas from '../Canvas/Canvas';
import styles from './TaskStatus.module.css';
import StatusDisc from '../StatusDisc/StatusDisc';
import statusIcon from './statusIcon.svg';

export default function TaskStatus() {
  return (
    <Canvas width={"423px"} height={"263px"} padding={"24px 25px 44px"}>
        <header className={styles.header}>
            <img src={statusIcon} alt="task status logo" />
            <p className={styles.text}>Task Status</p>
        </header>
        <ul className={styles.statuslist}>
            <StatusDisc color={"#05A301"} categoryName={'Completed'}/>
            <StatusDisc color={"#0225FF"} categoryName={'In Progress'}/>
            <StatusDisc color={"#F21E1E"} categoryName={'Not Started'}/>
        </ul>
    </Canvas>
  )
}
