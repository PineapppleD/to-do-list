import React, { useState } from "react";
import Title from "./Title";
import styles from './Modal.module.css';

export default function DescriptionInput() {
  const [value, setValue] = useState(null);

  return (
    <>
      <Title name={"Description"} />
      <input
       className={styles.descriptioninput}
        type="text"
        placeholder="Start writing here"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}
