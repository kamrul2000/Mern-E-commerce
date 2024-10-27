import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Navbar/Footer/Footer';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebase.init'; 
import {useState} from 'react'



initializeAuthentication();
const googleprovider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();
const auth = getAuth();

const Login = () => {
    const[user,setUser]=useState({});
    const [error,setError]=useState({})
    const [email,setEmail]=useState({});
    const [password, setPassword] = useState({});

    const signInWithGoogle=()=>{
        
signInWithPopup(auth, googleprovider)
  .then((result) => {
    setUser(result.user);
    

   
  }).catch((error) => {
    setError(error.message);
    
  });

    }
    const signInWithGithub = () => {
        
        signInWithPopup(auth, githubprovider)
            .then((result) => {
                setUser(result.user);



            }).catch((error) => {
                setError(error.message);

            });
            

    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(`${errorCode}`)
                console.log(`${errorMessage}`)
                
            });
        e.preventDefault();

    }
    

    return (
        <div className='bg-brand bg-brand-container'>
            <Navbar />
            <div className='container mt-5'>
                <h1 className='fs-4'>Login</h1>
             <button onClick={signInWithGoogle} className="btn btn-success mx-auto d-block mt-5">Sign In with Google</button>
                <button onClick={signInWithGithub} className="btn btn-dark mx-auto d-block mt-5">Sign In with GitHub</button>

             <div>
                <h1>Name:{user.displayName}</h1>
               <h2> Eamil:{user.email}</h2>
                <img src={user.photoURL}/>
             </div>
             <div className='container my-5'> 
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input onBlur={handleEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input onBlur={handlePassword} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
            
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>

             </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
