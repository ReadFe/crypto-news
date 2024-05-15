import React from "react";
import { Navbar, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Navbars extends React.Component {

    render() {
        return (
            <div>
                <Navbar className="p-4" bg="dark" data-bs-theme="dark">
                    <Container>
                    <Navbar.Brand href="#home">Crypto News</Navbar.Brand>
                    </Container>
                </Navbar>
            </div>
        )
    }
}