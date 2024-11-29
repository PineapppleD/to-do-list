import React from "react";
import styles from "./Welcome.module.css";
import temp from "./temp.png";
import InviteButton from "./InviteButton";

export default function Welcome() {
  const friendslist = new Array(6).fill("");
  return (
    <div className={styles.welcome}>
      <p className={styles.welcomeText}>Welcome back, Abdrakhmanov 👋</p>
      <div className={styles.friends}>
        <ul className={styles.friendslist}>
          {friendslist.slice(0, 4).map((_, i) => (
            <li key={i}>
              <img src={temp} alt={i} />
            </li>
          ))}
          {friendslist.length > 4 && (
            <li className={styles.remindfriends}>
              <div>
                <p className={styles.remindText}>{`+${
                  friendslist.length - 4
                }`}</p>
                <img className={styles.remind} src={temp} alt="a" />
              </div>
            </li>
          )}
        </ul>
      </div>
      <InviteButton />
    </div>
  );
}
