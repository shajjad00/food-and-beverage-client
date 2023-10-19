import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebaseConfig";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [allProduct, setAllProduct] = useState([]);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  //fetching data

  useEffect(() => {
    fetch("http://localhost:4000/product")
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, []);

  //create user

  const createUser = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //user gmail password login

  const userSignIn = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //user sign out

  const userSignOut = () => {
    setLoading(false);
    return signOut(auth);
  };

  //google login

  const googleSignIn = () => {
    setLoading(false);
    return signInWithPopup(auth, provider);
  };

  //user tracking

  useEffect(() => {
    setLoading(false);
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSubscribe;
  }, [auth]);

  //auth values
  const values = {
    createUser,
    userSignIn,
    loading,
    user,
    userSignOut,
    auth,
    googleSignIn,
    allProduct,
  };

  return (
    <>
      <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    </>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
