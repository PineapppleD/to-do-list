import React from "react";
import Title from "./Title";
import styles from "./Modal.module.css";
import UploadIcon from "./UploadIcon";

export default function UploadImage({ image, setImage }) {
  const onImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    } else {
      alert("upload only image");
    }
  };
  return (
    <>
      <Title name={"Upload Image"} />
      <div className={styles.uploadBox}>
        <div className={styles.uploadIcon}>
          <UploadIcon />
        </div>
        <p className={styles.text}>Drag & Drop files here</p>
        <p className={styles.text}>or</p>
        <label className={styles.browseButton}>
          Browse
          <input type="file" accept="image/*" onChange={onImageChange} />
        </label>
      </div>
    </>
  );
}
