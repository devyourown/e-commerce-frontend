import React from 'react';
import NavBar from "./NavBar";
import {Link} from "react-router-dom";
import "./Header.css"
import {Container, Row, Col} from "react-bootstrap";
import useTranslate from "../../hooks/useTranslate";
import LocaleSelect from "./LocaleSelect";

function Header() {
    const translate = useTranslate();

    return (
        <>
            <Container>
                <Row>
                    <Col className={"header-left"}>
                        <LocaleSelect/>
                    </Col>
                    <Col className={"header-center"}><img className={"logo"} src={process.env.PUBLIC_URL + "/logo.png"} /></Col>
                    <Col className={"header-right"}>
                        <Link to={"/login"}><div className={"header-left-item"}>{translate("login")}</div></Link>
                        <Link to={"/signUp"}><div className={"header-left-item"}>{translate("sign up")}</div></Link>
                    </Col>
                </Row>
            </Container>

            <NavBar />
        </>
    );
}

export default Header;