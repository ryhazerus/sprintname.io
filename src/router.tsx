import { createBrowserRouter } from "react-router-dom";
import App from './App/App';
import Login from './App/features/login/Login'
import Register from "./App/features/register/Register";
import Teams from "./App/features/teams/Teams";
import Account from "./App/features/account/Account";
import ForgotPassword from "./App/features/forgot-password/ForgotPassword";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/teams",
        element: <Teams />
    },
    {
        path: "/account",
        element: <Account />
    },
    {
        path: "/forgotpassword",
        element: <ForgotPassword />
    }
]);

export default router;