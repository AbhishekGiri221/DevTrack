import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function PublicLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default PublicLayout;