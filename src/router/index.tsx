import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../pages/about/About";
import Register from "../pages/auth/register/Register";
import Login from "../pages/auth/login/Login";
import Mainlayout from "../layout/Mainlayout";
import Product from "../pages/product/products";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout />,
        children: [
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ]
    },
    {
        path: "/product",
        element: <Product />,
    },
    {
        path: "/dashboard",
        element: <About />,
    },

]);

// const root: any = document.getElementById("root");

// ReactDOM.createRoot(root).render(
//     <RouterProvider router={router} />,
// );
