import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Pages/DashBoard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../Pages/DashBoard/AddItems/AddItems";
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems";
// import ErrorPage from "../ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    //   errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/menu',
            element: <Menu/>
        },
        {
            path: '/order/:category',
            element: <PrivateRoute><Order/></PrivateRoute>
        },
        {
            path: '/order',
            element: <PrivateRoute><Order/></PrivateRoute>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <SignUp/>
        },
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children: [
        {
          path: "cart",
          element: <PrivateRoute><Cart/></PrivateRoute>
        },
        {
          path: "allUsers",
          element: <PrivateRoute><AdminRoute><AllUsers/></AdminRoute></PrivateRoute>
        },
        {
          path: "addItems",
          element: <PrivateRoute><AdminRoute><AddItems/></AdminRoute></PrivateRoute>
        },
        {
          path: "manageItems",
          element: <PrivateRoute><AdminRoute><ManageItems/></AdminRoute></PrivateRoute>
        },
      ]
    },
  ]);