import { createBrowserRouter, Navigate } from "react-router";
import Register from "../pages/auth/register/Register";
import Login from "../pages/auth/login/Login";
import Product from "../pages/product/Products";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import PublicRoute from "../components/ProtectedRoute/PublicRoute";
import PrivateRoute from "../components/ProtectedRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicRoute />,
        children: [
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/login",
                element: <Login />,
            }
        ]
    },
    {
        path: "/",
        element: <PrivateRoute />,
        children: [
            {
                path: "/product",
                element: <Product />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "*",
                element: <Navigate to="/dashboard" replace />,
            }
        ]
    }
]);
