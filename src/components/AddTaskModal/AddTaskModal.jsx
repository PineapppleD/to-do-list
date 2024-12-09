import React, { useState } from "react";
import styles from "./AddTaskModal.module.css";
import Input from "../Input/Input";
import PriorityList from "./PriorityList";
import Title from "./Title";
import DescriptionInput from "./DescriptionInput";
import UploadImage from "./UploadImage";
import Button from "../Button/Button";

export default function AddTaskModal() {
  const [textValue, setTextValue] = useState(null);
  const [dateValue, setDateValue] = useState(null);
  const [image, setImage] = useState("");

  const ontextchange = (e) => {
    setTextValue(e.target.value);
  };

  const ondatechange = (e) => {
    setDateValue(e.target.value);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h1 className={styles.heading}>
          Add New Task
          <span></span>
        </h1>
        <button className={styles.button}>Go Back</button>
      </div>

      <div className={styles.main}>
        <Title name={"Title"} />
        <Input
          type={"text"}
          placeholder={"Title"}
          value={textValue}
          onchange={ontextchange}
        />
        <Title name={"Date"} />
        <Input type={"date"} value={dateValue} onchange={ondatechange} />
        <Title name={"Priority"} />
        <PriorityList />
        <div className={styles.bottom}>
          <div className={styles.description}>
            <DescriptionInput />
          </div>
          <div>
            <UploadImage image={image} setImage={setImage} />
          </div>
        </div>
      </div>
      <Button orange type={"text"} data={"Done"} />
    </div>
  );
}
