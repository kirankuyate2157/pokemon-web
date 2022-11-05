import React from "react";
import { Outlet } from "react-router";
import HomeNavbar from "../Components/Navbar/Home.Navbar";

const HomeLayout = () => {
    return (
        <>
            <div className="shadow-md py-3"> <HomeNavbar /></div>

            <div className="container px-10 md:px-20 mx-auto ">
                <Outlet />
            </div>

        </>
    );
};
export default HomeLayout;