import React, {  } from 'react';
// import AuthContext from '../../store/auth-context';
import PostList from '../PostList/PostList';
import RecommendSubsList from '../RecommendSubs/RecommendSubsList';

import styles from './Home.module.css';

function Home(props) {
    // const context = useContext(AuthContext);

    return (
        <div className={styles.home}>
            <PostList data={props.postsData} />
            <RecommendSubsList data={props.recommendSubsData} />
        </div>
    )
}

export default Home;