import React from 'react';
import NavBar from "./NavBar";
import {Link} from "react-router-dom";
import "./Header.css"
import {Container, Row, Col} from "react-bootstrap";
import useTranslate from "../../hooks/useTranslate";
import LocaleSelect from "./LocaleSelect";
import {useSelector} from "react-redux";
import {RootState, UserInfoType} from "../../store/store";

function Header() {
    const translate = useTranslate();
    const userInfo : UserInfoType = useSelector((state : RootState) => state.userInfo);

    return (
        <>
            <Container>
                <Row>
                    <Col className={"header-left"}>
                        <LocaleSelect/>
                    </Col>

                    <Col className={"header-center"}><img className={"logo"} src={process.env.PUBLIC_URL + "/logo.png"} /></Col>
                    <Col className={"header-right"}>
                        {!userInfo.isSignIn && <Link to={"/signIn"}><div className={"header-left-item"}>{translate("sign in")}</div></Link>}
                        {!userInfo.isSignIn && <Link to={"/signUp"}><div className={"header-left-item"}>{translate("sign up")}</div></Link>}
                        {userInfo.isSignIn && <div className={"header-left-item"}>{userInfo.username}{translate("welcome-msg")}</div>}
                    </Col>
                </Row>
            </Container>

            <NavBar />
        </>
    );
}

export default Header;