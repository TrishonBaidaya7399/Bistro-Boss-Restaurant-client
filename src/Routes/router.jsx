import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
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
            element: <Order/>
        },
        {
            path: '/order',
            element: <Order/>
        },
      ]
    },
  ]);