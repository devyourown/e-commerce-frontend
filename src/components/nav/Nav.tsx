import React from 'react';
import {Link} from "react-router-dom";
import SelectStyles from "../styles/Select.styles";
import LocaleSelect from "./LocaleSelect";
function Nav() {


    return (
        <>
            <Link to={"/"} ><h1>Logo</h1> </Link>
            <ul>
                <Link to={"/login"}><li>login</li> </Link>
                <Link to={"/signUp"}><li>sign up</li> </Link>
            </ul>
            <LocaleSelect />

        </>
    );
}

export default Nav;