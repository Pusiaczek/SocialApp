import React, { useContext } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

const LoggedOutHeaderPart = () => {
    return (
        <React.Fragment>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/signup">Sign Up</Link>
            </li>
        </React.Fragment>)
}





function Header() {
    const context = useContext(AuthContext);

    const LoggedInHeaderPart = () => {
        return (
            <li>
                <button onClick={context.onLogout}>Logout</button>
            </li>
        )
    }



    return (
        <div className={styles.header}>
            <ul className={styles.headerList}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {context.isLoggedIn ? <LoggedInHeaderPart /> : <LoggedOutHeaderPart />}
            </ul>
            <h1>Social App</h1>
        </div>
    )
}

export default Header;