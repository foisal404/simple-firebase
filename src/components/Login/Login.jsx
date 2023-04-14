import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../../firebase/firebase.init';

const Login = () => {
    // auth 
    const auth = getAuth(app);
    // google provider 
    const googleProvider=new GoogleAuthProvider();
    // github provider 
    const githubProvider=new GithubAuthProvider();
    const [user,setUser]=useState(null)
    // google signIn handler 
    const handleGoogleSignIn=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const Loggeduser=result.user;
            console.log(Loggeduser);
            setUser(Loggeduser)
        })
        .catch(error=>{
            console.log("error",error.message);
        })
    }
    // github login handler
    const handleGithubSignIn=()=>{
        signInWithPopup(auth,githubProvider)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            setUser(loggedUser);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    // logout handler
    const handleGoogleSignOut=()=>{
        signOut(auth)
            .then(() => {
                console.log("Sign-out successful.");
                setUser(null)
            })
            .catch((error) => {
                console.log("error",error.message);
            });
    }
    return (
        <div>
            {
                user? <button onClick={handleGoogleSignOut}>LogOut</button>:
                <div>
                    <button onClick={handleGoogleSignIn}>Google Login</button>
                    <button onClick={handleGithubSignIn}>Github Login</button>
                </div>
            }
            {
                user && <div>
                    <h1>{user.displayName}</h1>
                    <h1>{user.email}</h1>
                    <img src={user.photoURL} alt="" />
                </div>
            }
            
        </div>
    );
};

export default Login;