import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import SelectStyles from "../styles/Select.styles";
import LocaleSelect from "./LocaleSelect";
import { Navbar, Container, Nav, Form, Button, NavDropdown} from 'react-bootstrap';

function NavBar() {

    const navigate = useNavigate();

    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    {/*<Navbar.Brand href="#home">Navbar</Navbar.Brand>*/}
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigate("/list")}>List</Nav.Link>
                        <Nav.Link onClick={() => navigate("/")}>Pricing</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-dark">Dark</Button>
                    </Form>
                </Container>
            </Navbar>



        </>
    );
}

export default NavBar;