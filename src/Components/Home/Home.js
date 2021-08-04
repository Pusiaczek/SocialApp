import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import PostList from '../PostList/PostList';

function Home(props) {
    const context = useContext(AuthContext);

    return(
        <React.Fragment>
            <PostList data={props.postsData} />
        </React.Fragment>
    )
}

export default Home;