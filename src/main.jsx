import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import MyCreatedRoute from "./Route/Route.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// import PropTypes from 'prop-types';
// import { FaBeer } from 'react-icons/fa';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={MyCreatedRoute}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
