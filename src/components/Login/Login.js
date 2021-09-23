import "firebase/auth";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import firebase from "firebase/compat/app";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import firebaseConfig from "./firebase.config";



firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [user, setUser] = useState({
        isLoggedIn: false,
        name: "",
        email: ""
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();

    let {from} = location.state || {from: {pathname: "/"}};
    
    const handleGoogleSignIn = () => {
      const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
          const {displayName, email} = result.user;
          const userInfo = {
              isLoggedIn: true,
              name: displayName,
              email: email
          }
          setLoggedInUser(result.user);
          setUser(userInfo);
          history.replace(from);

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleGoogleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        const userInfo = {
            isLoggedIn: false,
            name: "",
            email: ""
        }
        setUser(userInfo);
    }).catch((error) => {
        console.log(error);
    });
  }

  return (
    <div style={{textAlign: "center", marginTop: "40px"}}>
      {
          user.isLoggedIn && <div>
              <h3>Name: {(user.name).toUpperCase()}</h3>
              <p>Email: {user.email}</p>

          </div>
      }

      {
          user.isLoggedIn ? <Button className="btn btn-bg-success mt-2 p-2" onClick={handleGoogleSignOut}>Sign Out</Button> : 
          <Button style={{width: "250px", height: "60px", backgroundColor: "green"}} className="btn btn-bg-primary mt-2 p-2" onClick={handleGoogleSignIn}>Sign in with google</Button>
      }
      
    </div>
  );
};

export default Login;
