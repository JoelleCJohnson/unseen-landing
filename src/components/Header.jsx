import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
    //handleDownload will have to direct to ios or android app store
    function handleIOSDownload() {
        alert("You clicked on the button");
    }

    function handleAndroidDownload() {
        alert("You clicked on the button");
    }

        return (
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Unseen</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Nav.Link href="#contact">Contact Us</Nav.Link>
                            <NavDropdown title="Download" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={handleIOSDownload}>iOS</NavDropdown.Item>
                                <NavDropdown.Item onClick={handleAndroidDownload}>Android</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }

