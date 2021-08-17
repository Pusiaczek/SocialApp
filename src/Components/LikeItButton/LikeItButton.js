import styles from './LikeItButton.module.css';
import AuthContext from '../../store/auth-context';
import { useContext } from 'react';


function LikeItButton(props) {
    const context = useContext(AuthContext);

    const likeClickHandler = () => {
        context.isLoggedIn && (props.isLiked ? context.onDislikeClick(props.id) : context.onLikeItClick(props.id))
    }

    return (
        <div className={`${styles.likes} ${props.isLiked && styles.liked}`} onClick={likeClickHandler}>
            {/* <span className={styles.likeBtn}>Like IT!</span><span className={styles.likeCounter}>{props.item.likes.length} <i className="fas fa-thumbs-up thumbsup"></i></span> */}
            <i className="fas fa-thumbs-up thumbsup"></i>
            <span className={`${styles.likeCounter}`}>
                {props.likesCount}
            </span>

            {/* <p>{props.isLiked.toString()}</p> */}
        </div>
    )
}

export default LikeItButton;








