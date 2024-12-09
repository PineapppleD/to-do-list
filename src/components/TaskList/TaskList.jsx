import React from "react";
import styles from "./TaskList.module.css";
import Task from '../Task/Task';

const tasks = [
  {
    name: "Prepare Presentation for Monday Meeting",
    description:
      "Complete slides on the quarterly performance. Practice speaking points. (10 AM | Conference Room A)",
    priority: "high",
    status: "In Progress",
    createdAt: "01/12/2024",
  },
  {
    name: "Weekly Grocery Shopping",
    description:
      "Buy fruits, vegetables, and other essentials for the week. (4 PM | City Supermarket)",
    priority: "low",
    status: "Not Started",
    createdAt: "02/12/2024",
  },
  {
    name: "Morning Yoga Class",
    description:
      "Attend the session and bring your own yoga mat. (6:30 AM | Fitness Studio)",
    priority: "moderate",
    status: "Completed",
    createdAt: "02/12/2024",
  },
  {
    name: "Client Follow-Up Emails",
    description:
      "Send follow-up emails to clients regarding pending projects and invoices. (11 AM | Online)",
    priority: "high",
    status: "Not Started",
    createdAt: "01/12/2024",
  },
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
  {
    name: "Dentist Appointment",
    description:
      "Routine dental checkup and cleaning. Don’t forget insurance details. (3 PM | Downtown Clinic)",
    priority: "moderate",
    status: "Not Started",
    createdAt: "02/12/2024",
  },
  {
    name: "Finalize Budget for Holiday Party",
    description:
      "Discuss with the finance team and approve the budget. (2 PM | Office)",
    priority: "high",
    status: "Not Started",
    createdAt: "02/12/2024",
  },
];

export default function TaskList() {
  return <ul className={styles.tasklist}>
    {
      tasks.slice(0, 2).map((task, index) => <Task key={index} name={task.name} description={task.description} priority={task.priority} status={task.status} createdAt={task.createdAt}/>)
    }
  </ul>;
}
