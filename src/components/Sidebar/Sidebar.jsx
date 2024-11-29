import React, { act, useState } from "react";
import styles from "./Sidebar.module.css";
import {
  DashBoardIcon,
  CategoriesIcon,
  ProfileIcon,
  SettingsIcon,
  VitalIcon,
  MyTaskIcon,
  HelpIcon,
  LogoutIcon,
} from "./icons";
import SideButton from "./SideButton/SideButton";

export default function Sidebar() {
  const sidebarElements = [
    {
      Icon: DashBoardIcon,
      title: "Dashboard",
    },
    {
      Icon: VitalIcon,
      title: "Vital tasks",
    },
    {
      Icon: MyTaskIcon,
      title: "My task",
    },
    {
      Icon: CategoriesIcon,
      title: "Task categories",
    },
    {
      Icon: SettingsIcon,
      title: "Settings",
    },
    {
      Icon: HelpIcon,
      title: "Help",
    },
  ];

  const [activeId, setActiveId] = useState(0);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.profile}>
        <ProfileIcon className={styles.picture} />
        <h2 className={styles.username}>Dias Abdrakhmanov</h2>
        <p className={styles.email}>clasherkz77@gmail.com</p>
      </div>
      <div className={styles.sidebarelements}>
        <ul>
          {sidebarElements.map((element, index) => {
            const { Icon, title } = element;
            return (
              <SideButton
                key={index}
                Icon={Icon}
                title={title}
                onClick={() => setActiveId(index)}
                isActive={activeId === index}
              />
            );
          })}
        </ul>
        <div className={styles.asidebottom}>
          <SideButton
            onClick={() => console.log('hello')}
            title={'Logout'}
            Icon={LogoutIcon}
          />
        </div>
      </div>
    </aside>
  );
}
