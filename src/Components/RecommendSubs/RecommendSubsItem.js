import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import styles from './RecommendSubsItem.module.css';

function RecommendSubsItem(props) {
    const context = useContext(AuthContext)

    const subscribeClickHandler = () => {
        context.onSubscribe(props.data.id)
    }


    return (

        <li className={styles.recommendSubsListItem} user_id={props.data.id} onClick={subscribeClickHandler} >
            <div className={styles.innerItem}>
                <img src={props.data.avatar_url} alt="portrait"  />
                <div className={styles.innerImg}>
                    <h2>{props.data.username}</h2>
                </div>
            </div>
        </li>


    )
}

export default RecommendSubsItem;