import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

import AuthContext, { AuthContextProvider } from './store/auth-context';


import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

import SignUp from './Components/PopUp/SignUp';
import Login from './Components/PopUp/Login';

import getDefaultPosts from './Queries/getDefaultPosts';

function App() {
  const [posts, setPosts] = useState([]);
  const [showSignUpPopUp, setShowSignUpPopUp] = useState(false);
  const context = useContext(AuthContext)


  const closeSignUpPopUp = () => {
    setShowSignUpPopUp(false);
  }

  useEffect(() => {
    getDefaultPosts().then(res => {
      setPosts(res.data)
    })

    let timer =
      setTimeout(() => {
        setShowSignUpPopUp(true);
      }, 1000)

    // return (clearTimeout(timer))
  }, [])





  return (
    <Router>
      <AuthContextProvider>
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
      </AuthContextProvider>
    </Router >
  );
}

export default App;
