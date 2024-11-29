import React from 'react';
import styles from './LoginForm.module.css';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import name from './name.svg';
import password from './password.svg';
import FB from './GOOGLE.svg';
import google from './FB.svg';
import X from './Vector.svg';
import loginIllustration from './loginill.png';

export default function LoginForm() {
  return (
    <div className={styles.login}>
        <div className={styles.loginformcontainer}>
            <form className={styles.loginform}>
                <h1>Sign In</h1>
                <FormInput inputImageUrl={name} placeholder="Enter Username"/>
                <FormInput inputImageUrl={password} placeholder="Enter Password"/>
                <label htmlFor="remember">
                    <input id='remember' type="checkbox" />
                    <span>Remember Me</span>
                </label>
                <Button type="text" data={"Login"}/>
                <div>
                    <p className={styles.loginalts}>
                        Or, Login with 
                        <div className={styles.logos}>
                            <img src={google} alt="google login link" />
                            <img src={FB} alt="facebook login link" />
                            <img src={X} alt="X login link" />
                        </div>
                    </p>
                    <p>
                    Don’t have an account?
                    <span style={{marginLeft: 10}}>Create One</span>
                    </p>
                </div>
            </form>
            <div styles={styles.loginimagecontainer}>
                <img src={loginIllustration} alt="login illustration" />
            </div>
        </div>
    </div>
  )
}
