import React, { useRef, useContext } from "react";
import { Redirect } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import styles from './Login.module.css';

function Login() {
    const context = useContext(AuthContext);

    const usernameInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const submitLogin = (e) => {
        e.preventDefault();
        // console.log("submit login form");

        const loginData = {
            username: usernameInputRef.current.value,
            password: passwordInputRef.current.value
        }

        context.onLogin(loginData)
    }


    return (
        <React.Fragment>
            {context.isLoggedIn && <Redirect to='/' />}
            <div className={styles.loginOuter}>
                <form onSubmit={(e) => { submitLogin(e) }}>
                    <h2>Log in!</h2>
                    <input ref={usernameInputRef} defaultValue="adam" type="text" placeholder="Nazwa użytkownika" />
                    <input ref={passwordInputRef} defaultValue="1234" type="password" autoComplete="" placeholder="Podaj hasło" />
                    <input type="submit" value="Log in!" />
                </form>
            </div>
        </React.Fragment>
    )
}

export default Login;