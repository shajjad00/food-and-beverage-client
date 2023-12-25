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
import axios from "axios";



export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [allProduct, setAllProduct] = useState([]);
  const [bannerImg, setBannerImg] = useState([]);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  //fetching data

  useEffect(() => {
    //using axios

    axios("https://food-and-beverage.vercel.app/product").then((data) =>
      setAllProduct(data.data)
    );

    //using fetch

    // fetch("https://food-and-beverage.vercel.app/product")
    //   .then((res) => res.json())
    //   .then((data) => setAllProduct(data));
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

  //dark mode

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  //advertise banner image json

  useEffect(() => {
    fetch("adBanner.json")
      .then((res) => res.json())
      .then((data) => setBannerImg(data));
  }, []);

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
    theme,
    handleThemeSwitch,
    bannerImg,
    setAllProduct,
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
