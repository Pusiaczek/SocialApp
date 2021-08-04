import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

import AuthContext from './store/auth-context';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

import SignUp from './Components/PopUp/SignUp';
import Login from './Components/PopUp/Login';

import getDefaultPosts from './Queries/getDefaultPosts';
import authReducer from './Queries/authReducer';


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState();
  const [loggedInAuth, dispatchLogin] = useReducer(authReducer, {
    isLoggedIn: false,
  })


  console.log(loggedInAuth);
  // const { isLoggedIn: loggedIn } = loggedInAuth;

  const [posts, setPosts] = useState([]);
  const [showSignUpPopUp, setShowSignUpPopUp] = useState(false);

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


  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }

  const loginHandler = async (loginData) => {
    const user = {
      ...loginData,
      ttl: 3600
    }

    try {
      const response = await axios.post(
        'https://akademia108.pl/api/social-app/user/login',
        JSON.stringify(user),
        axiosConfig,
      )

      if (response.data.jwt_token) {
        dispatchLogin({ type: 'login', token: response.data.jwt_token })
      } else {
        throw new Error('brakuja tokena');
      }

    } catch (error) {
      console.log("error", error);
    }
  }


  return (
    <Router>
      <AuthContext.Provider value={{
        isLoggedIn: loggedInAuth.isLoggedIn,
        onLogout: () => { dispatchLogin({ type: 'logout' }) },
        onLogin: loginHandler
      }}>
        <Header />
        <Switch>
          <Route exact path='/'>
            {!loggedInAuth.isLoggedIn && showSignUpPopUp && <SignUp close={closeSignUpPopUp} />}
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
      </AuthContext.Provider>
    </Router >
  );
}

export default App;
