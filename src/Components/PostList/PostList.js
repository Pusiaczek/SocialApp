import React from "react";
import PostItem from "./PostItem";
import styles from './PostList.module.css';


function PostList(props) {
    let postList = <li>Brak postów!</li>


    if (props.data) {
        postList = props.data.map((item, index) =>
            <PostItem item={item} key={index} id={item.id} />
        )
    }

    return (
        <React.Fragment>
            <ul className={styles.postList}>
                {postList}
            </ul>
        </React.Fragment>
    )
}

export default PostList