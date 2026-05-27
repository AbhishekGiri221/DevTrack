import { Outlet } from "react-router-dom";

function LandingLayout() {
    return (
        <>
            <MainpageNavbar />
            <Outlet />
        </>
    )
}

export default LandingLayout;