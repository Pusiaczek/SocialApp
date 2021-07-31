import SocialPostItem from "./SocialPostItem";
import styles from './SocialPostList.module.css';

function SocialPostList(props) {
    let postList = <li>Brak postów!</li>

    console.log(props.data);

    if(props.data) {
        postList = props.data.map( (item, index) => 
            <SocialPostItem item={item} key={index}/>
    )}

    return (
        <ul className={styles.postList}>
            {postList}
        </ul>
    )
}

export default SocialPostList