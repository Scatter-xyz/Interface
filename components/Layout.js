import { useState } from "react";
import { ethers } from "ethers";
import Navbar from "./NavBar";

const Layout = ({children}) => {

    return (
        <>
            <Navbar/>
            {children}
        </>
    )
}

export default Layout;