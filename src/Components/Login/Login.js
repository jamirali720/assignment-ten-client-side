import React, { useContext,  useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig'
import { userContext } from '../../App';
import { useHistory, useLocation} from "react-router-dom";
    
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
  
    const    history = useHistory();
    
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
   
    const handleGoogleSignIn = () => {
        
        const  googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then((result) => {  
            
            const {displayName, email}   = result.user;  
            const signedInUser = {name : displayName , email}         
         
           setLoggedInUser(signedInUser)
            history.replace(from)
           
            
        }).catch((error) => {    
            var errorMessage = error.message;  
            var email = error.email;
            console.log(errorMessage, email)    
        
        });

    }
    const loginStyle= {
    marginLeft: '0px' ,
    marginTop: '5px' 
}
    return (
        <div style={loginStyle}>
            <h1>This is login page</h1>
                    <button onClick={handleGoogleSignIn}>Sign In with Google</button>
        </div>
    );
};

export default Login;