import React from "react";
import ReactDOM from "react-dom";

import styles from './SignUp.module.css';



function SignUp(props) {


    const closePopUp = (e) => {
        e.preventDefault();
        props.close();
    }

    const signUpForm = <div className={styles.signUpOuter}>
        <form onSubmit={null}>
            <h2>Sign up!</h2>
            <input type="text" placeholder="Nazwa użytkownika" />
            <input type="mail" placeholder="Adres e-mail" />
            <input type="password" autoComplete="" placeholder="Nowe hasło" />
            <input type="password" autoComplete="" placeholder="Powtórz hasło" />
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