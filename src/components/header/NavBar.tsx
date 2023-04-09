import React from 'react';
import {Link} from "react-router-dom";
import SelectStyles from "../styles/Select.styles";
import LocaleSelect from "./LocaleSelect";
import { Navbar, Container, Nav, Form, Button, NavDropdown} from 'react-bootstrap';

function NavBar() {


    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    {/*<Navbar.Brand href="#home">Navbar</Navbar.Brand>*/}
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
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