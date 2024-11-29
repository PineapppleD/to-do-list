import React from 'react';
import styles from './Welcome.module.css';
import invite from './invite.svg';

export default function InviteButton() {
  return (
    <button className={styles.inviteButton}>
        <img src={invite} alt='invite friends button'/>
        <p>Invite</p>
    </button>
  )
}
