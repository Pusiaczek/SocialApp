import React, { useRef } from "react";
import ReactDOM from "react-dom";
import submitHandler from "../../Queries/submitHandler";

import styles from './SignUp.module.css';



function SignUp(props) {
    const usernameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const confirmPasswordInputRef = useRef(null);


    const closePopUp = (e) => {
        e.preventDefault();
        props.close();
    }


    const checkWhiteSpace = (testString) => {
        const regEx = new RegExp(/\s/);
        return regEx.test(testString)
    }

    const validateUsername = (username) => {
        if (username.length <= 0) {
            return {
                isValid: false,
                message: 'Nazwa użytkownika nie może być pusta.',
            }
        } else if (username.length < 4) {
            return {
                isValid: false,
                message: 'Nazwa użytkownika musi być dłuższa niż 4 znaki.'
            }
        } else if (checkWhiteSpace(username)) {
            return {
                isValid: false,
                message: 'Nazwa użytkownika nie może zawierać białych znaków.'
            }
        } else {
            return {
                isValid: true,
                message: 'Nazwa użytkownika poprawna.',
            }
        }
    }


    const validateEmail = (email) => {
        if (email.length <= 0) {
            return {
                isValid: false,
                message: 'Adres e-mail nie może być pusty.',
            }
        } else if (!email.includes('@')) {
            return {
                isValid: false,
                message: 'Niepoprawny adres e-mail.'
            }
        } else if (checkWhiteSpace(email)) {
            return {
                isValid: false,
                message: 'Adres e-mail nie może zawierać białych znaków.'
            }
        } else {
            return {
                isValid: true,
                message: 'Adres e-mail poprawny.',
            }
        }
    }


    const checkForSpecialChars = (testString) => {
        const regExSC = new RegExp(/[!@#$%]/);
        const regExDigits = new RegExp(/[0-9]/);
        return regExSC.test(testString) && regExDigits.test(testString)
    }

    const validatePassword = (pass, pass2) => {
        if (pass.length <= 0) {
            return {
                isValid: false,
                message: 'Hasło nie może być puste.',
            }
        } else if (pass.length <= 6) {
            return {
                isValid: false,
                message: 'Hasło musi zawierać co najmniej 6 znaków.'
            }
        } else if (!checkForSpecialChars(pass)) {
            return {
                isValid: false,
                message: 'Hasło musi zawierać przynajmniej jedną cyfrę i jeden znak specjalny: "! # @ $ %".'
            }
        } else if (!(pass === pass2)) {
            return {
                isValid: false,
                message: 'Podane hasła nie są identyczne.',
            }
        } else {
            return {
                isValid: true,
                message: 'Hasło poprawne.',
            }
        }
    }


    const onSubmitHandler = (e) => {
        e.preventDefault();
        const username = usernameInputRef.current.value
        const email = emailInputRef.current.value
        const password = passwordInputRef.current.value
        const password2 = confirmPasswordInputRef.current.value

        if (validateUsername(username).isValid &&
            validateEmail(email).isValid &&
            validatePassword(password, password2).isValid) {

            submitHandler({ username, email, password });

            console.log("Walidacja ok");
        } else {


            console.log("Walidacja nie ok \n",
                validateUsername(usernameInputRef.current.value).message, '\n',
                validateEmail(emailInputRef.current.value).message, '\n',
                validatePassword(passwordInputRef.current.value, confirmPasswordInputRef.current.value).message
            );

        }

    }



    const signUpForm = <div className={styles.signUpOuter}>
        <form onSubmit={onSubmitHandler} onChange={null}>
            <h2>Sign up!</h2>
            <input ref={usernameInputRef} type="text" placeholder="Nazwa użytkownika" />
            <input ref={emailInputRef} type="mail" placeholder="Adres e-mail" />
            <input ref={passwordInputRef} type="password" autoComplete="" placeholder="Nowe hasło" />
            <input ref={confirmPasswordInputRef} type="password" autoComplete="" placeholder="Powtórz hasło" />
            <button className={styles.closeButton} onClick={(e) => { closePopUp(e) }}>⨉</button>
            <input type="submit" value="Sign up!" />
        </form>
    </div>

    return (
        <React.Fragment>
            {ReactDOM.createPortal(signUpForm, document.getElementById("popup-root"))}
        </React.Fragment>
    )
}

export default SignUp;