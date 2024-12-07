import React from "react";

export default function Tasks() {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <main className={styles.main}>
        <Welcome />
        <DashboardComponent />
      </main>
    </div>
  );
}
