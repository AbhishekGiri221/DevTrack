import { Navigate } from "react-router-dom";


function PublicRoute({children}) {
    console.log(children);
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";

    return(
        <>
            {isLoggedIn ? <Navigate to="/app/dashboard" /> : children}
        </>
    )
}

export default PublicRoute;