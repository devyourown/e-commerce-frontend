import React from 'react';
import {Link} from "react-router-dom";
function Nav() {
    return (
        <>
            <Link to={"/"} ><h1>Logo</h1> </Link>
            <ul>
                <Link to={"/login"}><li>login</li> </Link>
            </ul>
        </>
    );
}

export default Nav;