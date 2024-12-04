import React from 'react';
import styles from './Dashboard.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Welcome from '../../components/Welcome/Welcome';
import DashboardComponent from '../../components/DashboardComponent/DashboardComponent';

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
        <Sidebar />
        <main className={styles.main}>
            <Welcome />
            <DashboardComponent />
        </main>
    </div>
  )
}
