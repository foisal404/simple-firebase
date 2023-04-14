import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../../firebase/firebase.init';

const Login = () => {
    const auth = getAuth(app);
    const googleProvider=new GoogleAuthProvider();
    const [user,setUser]=useState(null)

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
                user? <button onClick={handleGoogleSignOut}>Google LogOut</button>:<button onClick={handleGoogleSignIn}>Google Login</button>
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