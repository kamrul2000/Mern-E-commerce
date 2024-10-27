import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Navbar/Footer/Footer';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebase.init'; 
import {useState} from 'react'



initializeAuthentication();
const provider = new GoogleAuthProvider();

const Login = () => {
    const[user,setUser]=useState({});
    const [error,setError]=useState({})
    const signInWithGoogle=()=>{
        const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    setUser(result.user);
    

   
  }).catch((error) => {
    setError(error.message);
    
  });

    }
    return (
        <div className='bg-brand bg-brand-container'>
            <Navbar />
            <div className='container mt-5'>
                <h1 className='fs-4'>Login</h1>
             <button onClick={signInWithGoogle} className="btn btn-success mx-auto d-block mt-5">Sign In with Google</button>
             <div>
                <h1>Name:{user.displayName}</h1>
               <h2> Eamil:{user.email}</h2>
                <img src={user.photoURL}/>
             </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
