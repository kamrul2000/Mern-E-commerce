import initializeAuthentication from './../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState('')
    const [error, setError] = useState('')


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const google = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            }).catch((error) => {
                setError(error.message);
            });
    }
    const github = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        });

    }, [auth])

    const registerUser = async (name, image, email, password) => {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, { displayName: name, photoURL: image });

            // Setting user with updated information immediately after profile update
            setUser({ ...result.user, displayName: name, photoURL: image });
            setError('');
        } catch (error) {
            setError(error.message);
        }
    };



    const userUpdate = (name, image) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        }).then(() => {

        }).catch((error) => {

        });

    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                setError('');
                return user;  // return user to allow chaining if needed
            })
            .catch((error) => {
                setError(error.message);
                throw error;  // propagate the error so it can be caught by caller
            });
    }


    const logOut = () => {

        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error.message);

        });
        localStorage.removeItem('shipping');
    }
    return {
        user,
        error,
        google,
        github,
        logOut,

        registerUser,
        login
    }
}
export default useFirebase;