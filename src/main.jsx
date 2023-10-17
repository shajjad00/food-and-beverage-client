import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import MyCreatedRoute from "./Route/Route.jsx";
// import PropTypes from 'prop-types';
// import { FaBeer } from 'react-icons/fa';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MyCreatedRoute}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
