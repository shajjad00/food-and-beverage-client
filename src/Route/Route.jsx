import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CocaCola from "../Pages/Coca-Cola/CocaCola";
import PepsiCo from "../Pages/PepsiCo/PepsiCo";
import Nestlé from "../Pages/Nestlé/Nestlé";
import PranFoods from "../Pages/PranFoods/PranFoods";
import Starbucks from "../Pages/Starbucks/Starbucks";
import McDonalds from "../Pages/McDonald's/McDonalds";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import MyCart from "../Pages/MyCart/MyCart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateForm from "../Components/UpdateForm/UpdateForm";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const MyCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>,
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/cocaCola",
        element: <CocaCola></CocaCola>,
        loader: () => fetch("https://food-and-beverage.vercel.app/product"),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://food-and-beverage.vercel.app/product/${params.id}`),
      },
      {
        path: "/pepsiCo",
        element: <PepsiCo></PepsiCo>,
      },
      {
        path: "/nestle",
        element: <Nestlé></Nestlé>,
      },
      {
        path: "/pranFoods",
        element: <PranFoods></PranFoods>,
      },
      {
        path: "/Starbucks",
        element: <Starbucks></Starbucks>,
      },
      {
        path: "/McDonald",
        element: <McDonalds></McDonalds>,
      },
      {
        path: "/updateProduct/:id",
        element: (
          <PrivateRoute>
            <UpdateForm></UpdateForm>,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://food-and-beverage.vercel.app/product/${params.id}`),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>,
          </PrivateRoute>
        ),
        loader: () => fetch("https://food-and-beverage.vercel.app/productCart"),
      },
    ],
  },
]);

export default MyCreatedRoute;
