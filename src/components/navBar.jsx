import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {
    return <>
        <h1>App Layout</h1>
        <Link to="/users">usersList</Link>
    </>;
}
 
export default NavBar;