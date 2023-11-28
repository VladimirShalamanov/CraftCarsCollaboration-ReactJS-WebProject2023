import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import Path from "../../utils/paths";
import AuthContext from "../../contexts/authContext";

export default function GuestGuard() {
    const { isAuthenticated } = useContext(AuthContext);

    if (isAuthenticated) {
        alert('You are already a logged in user!');

        return <Navigate to={Path.Home} />;
    }

    return <Outlet />;
};