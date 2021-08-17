import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

import AuthContext from './store/auth-context';


import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

import SignUp from './Components/PopUp/SignUp';
import Login from './Components/PopUp/Login';



function App() {
  // const [posts, setPosts] = useState([]);

  const [showSignUpPopUp, setShowSignUpPopUp] = useState(false);
  const context = useContext(AuthContext);


  const closeSignUpPopUp = () => {
    setShowSignUpPopUp(false);
  }

  useEffect(() => {
      context.onCheckLogin({
        isLoggedIn: !!localStorage.getItem('token'),
        token: localStorage.getItem('token'),
        user: localStorage.getItem('user'),
        userId: localStorage.getItem('user_id')
      })
    

    let timer = setTimeout(() => {
      setShowSignUpPopUp(true);
    }, 500)

    return (() => clearTimeout(timer))
  }, [])


  // useEffect(() => {
  //   context.onRefreshPosts();

  // }, [context.isLoggedIn])


  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          {!context.isLoggedIn && showSignUpPopUp && <SignUp close={closeSignUpPopUp} />}
          <Home postsData={context.getPostsData} recommendSubsData={context.getRecommendSubsData} />
        </Route>
        {/* <Route path='/logout'>
              <Logout dispatch={dispatchLogin} isLogged={isLogged} />
            </Route> */}
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
