import { useEffect, useState } from 'react';
import getAllPosts from '../../ApiQueries/getAllPosts';
import SocialPostList from './SocialPostList';

import styles from './SocialBody.module.css'

function SocialBody(props) {
    const [posts, setPosts] = useState([])

    useEffect( () => {
        getAllPosts().then( res => {
            // console.log(res);
            setPosts(res.data)
        })
    }, [])


    

    return (
        <div className={styles.socialBody}>
            <SocialPostList data={posts}/>
        </div>
    )
}


export default SocialBody;