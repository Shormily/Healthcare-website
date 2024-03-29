// import {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";
// import { useEffect, useState } from "react";
// import initializeAuthentication from "../Login/firebase/Login/firebase.init";
// initializeAuthentication();
// const useFirebase = () => {
//   const [users, setUsers] = useState({});
//   const auth = getAuth();

//   const signInUsingGoogle = () => {
//     const googleProvider = new GoogleAuthProvider();
//     signInWithPopup(auth, googleProvider).then((result) => {
//       setUsers(result.user);
//     });
//   };

//   useEffect(() => {
//     const unsubscribed = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUsers(user);
//       } else {
//         setUsers({});
//       }
//     });
//     return () => unsubscribed;
//   }, []);

//   const logOut = () => {
//     signOut(auth).then(() => {});
//   };

//   return {
//     users,
//     signInUsingGoogle,
//     logOut,
//   };
// };

// export default useFirebase;

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Login/firebase/Login/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // auth
  const auth = getAuth();

  //   google sign in
  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
    });
  };

  //   log out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  // sign in with email and password

  const handleEmailLogin = (name, email, password) => {
    console.log(name, email, password);
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      setUser(result.user);
      updateProfile(auth.currentUser, {
        displayName: name,
      }).then(() => {});
    });
  };

  const userLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      setUser(result.user);
      console.log(result.user);
    });
  };

  //   observe user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser();
      }
      setIsLoading(false);
    });
    return unsubscribe;
  }, [auth]);

  return {
    signInUsingGoogle,
    handleEmailLogin,
    userLogin,
    logOut,
    user,
    setIsLoading,
    isLoading,
  };
};

export default useFirebase;
