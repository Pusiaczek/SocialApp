import styles from './SocialPostItem.module.css';

function SocialPostItem(props) {
    const months = ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'];
    const postDate = new Date(props.item.created_at)


    return (
        <li className={styles.postItem}>
            <div className={styles.postItemImgContainer}>
                <img src={props.item.user.avatar_url} alt={`portrait${props.item.user.username}`} />
            </div>
            <div className={styles.postItemMessage}>
                <p>{props.item.content}</p>
                <div className={styles.likes}>
                    {/* <span className={styles.likeBtn}>Like IT!</span><span className={styles.likeCounter}>{props.item.likes.length} <i className="fas fa-thumbs-up thumbsup"></i></span> */}
                    <i className="fas fa-thumbs-up thumbsup"></i>
                    <span className={styles.likeCounter}>
                        
                        {props.item.likes.length}
                    </span>
                </div>
                <div className={styles.signature}>
                    {`~${props.item.user.username}~ ${postDate.getDay()} ${months[postDate.getMonth()]} ${postDate.getFullYear()}`}
                </div>
            </div>
        </li>
    )
}

export default SocialPostItem;


// content: "Hi, my name is John ;)"
// created_at: "2021-07-15T10:09:30.000000Z"
// id: 992
// likes: Array(5)
    // 0: {id: 2, username: "tomek", email: "tomek@gmail.com", avatar_url: "https://akademia108.pl/api/social-app/img/avatar2.png", created_at: "2019-08-18T20:21:11.000000Z", …}
    // 1: {id: 4, username: "piotrek", email: "piotrek@gmail.com", avatar_url: "https://akademia108.pl/api/social-app/img/avatar3.png", created_at: "2020-07-31T14:01:51.000000Z", …}
    // 2: {id: 6, username: "janek", email: "janek@gmail.com", avatar_url: "https://akademia108.pl/api/social-app/img/avatar2.png", created_at: "2019-08-06T19:45:31.000000Z", …}
    // 3: {id: 9, username: "mietek", email: "mietek@gmail.com", avatar_url: "https://akademia108.pl/api/social-app/img/avatar2.png", created_at: "2019-12-15T00:31:16.000000Z", …}
    // 4: {id: 10, username: "kasia", email: "kasia@gmail.com", avatar_url: "https://akademia108.pl/api/social-app/img/avatar3.png", created_at: "2019-09-14T09:50:50.000000Z", …}
    // length: 5
    // [[Prototype]]: Array(0)
// updated_at: "2021-07-15T10:09:30.000000Z"
// user:
    // avatar_url: "https://akademia108.pl/api/social-app/img/avatar2.png"
    // created_at: "2019-08-06T19:45:31.000000Z"
    // email: "janek@gmail.com"
    // id: 6
    // updated_at: null
    // username: "janek"