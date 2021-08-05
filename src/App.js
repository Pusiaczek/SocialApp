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

import getDefaultPosts from './Queries/getDefaultPosts';

function App() {
  const [posts, setPosts] = useState([]);
  const [showSignUpPopUp, setShowSignUpPopUp] = useState(false);
  const context = useContext(AuthContext);


  const closeSignUpPopUp = () => {
    setShowSignUpPopUp(false);
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      context.onCheckLogin({
        token: localStorage.getItem('token'),
        user: localStorage.getItem('user')
      })
    }

    getDefaultPosts().then(res => {
      setPosts(res.data)
    })

    let timer =
      setTimeout(() => {
        setShowSignUpPopUp(true);
      }, 5000)

    return (() => clearTimeout(timer))
  }, [context.isLoggedIn])


  return (
    <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            {!context.isLoggedIn && showSignUpPopUp && <SignUp close={closeSignUpPopUp} />}
            <Home postsData={posts} />
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
