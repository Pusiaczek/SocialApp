import PostItem from "./PostItem";
import styles from './PostList.module.css';

function PostList(props) {
    let postList = <li>Brak postów!</li>

    if (props.data) {
        postList = props.data.map((item, index) =>
            <PostItem item={item} key={index} />
        )
    }

    return (
        <div className={null}>
            <ul className={styles.postList}>
                {postList}
            </ul>
        </div>
    )
}

export default PostList