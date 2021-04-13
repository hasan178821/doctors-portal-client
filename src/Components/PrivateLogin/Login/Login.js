import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';

if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [user, setUser] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    var googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleLogin = () => {
        firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
          var credential = result.credential;
          var token = credential.accessToken;
          var user = result.user;
          setUser(user);
          setLoggedInUser(user);
          history.replace(from);

        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          console.log(errorCode, errorMessage, email, credential);
        });
    }
    return (
        <div>
            <button onClick={() => handleGoogleLogin()} className="btn brand-button">Continue With Google</button>
        </div>
    );
};

export default Login;