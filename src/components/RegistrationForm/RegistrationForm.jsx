import React from "react";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import styles from "./RegistrationForm.module.css";
import registrationIllustration from "./regill.png";
import confirm from "./icons/confirm.svg";
import name from "./icons/confirm.svg";
import lastname from "./icons/lastname.svg";
import email from "./icons/email.svg";
import password from "./icons/password.svg";
import username from "./icons/username.svg";

export default function RegistrationForm() {
  return (
    <div className={styles.registration}>
      <div className={styles.registrationFormContainer}>
        <img
          className={styles.regill}
          height={433}
          src={registrationIllustration}
          alt="registration illustration"
        />
        <form className={styles.registrationform}>
          <h1>Sign Up</h1>
          <FormInput inputImageUrl={name} placeholder={"Enter Firstname"} />
          <FormInput inputImageUrl={lastname} placeholder={"Enter Lastname"} />
          <FormInput inputImageUrl={username} placeholder={"Enter Username"} />
          <FormInput inputImageUrl={email} placeholder={"Enter Email"} />
          <FormInput inputImageUrl={password} placeholder={"Enter Password"} />
          <FormInput inputImageUrl={confirm} placeholder={"Confirm Password"} />
          <div>
            <label className={styles.agreement} htmlFor="agree">
              <input id="agree" type="checkbox" />
              <span>I agree to all terms</span>
            </label>
            <Button type="text" data="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}
