import LoggedInHeaderPart from './LoggedInHeaderPart';
import LoggedOutHeaderPart from './LoggedOutHeaderPart';
import styles from './SocialHeader.module.css';

function SocialHeader(props) {


    return (
        <div className={styles.header}>
            <ul className={styles.headerList}>
                <li>Home</li>
                {props.isLogged ? <LoggedInHeaderPart /> : <LoggedOutHeaderPart />}
            </ul>
            <h1>Social App</h1>
        </div>)
}

export default SocialHeader;