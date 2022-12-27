import "./app-header.scss";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


 
const AppHeader = () => {
    return (
        <>
            <Navbar className="header">
                <Container>
                    <Navbar.Brand href="/" className="d-flex align-items-end">
                    <img
                        src="../img/coffee-beans.svg"
                        width="30"
                        height="30"
                        alt="logo"
                        />
                        Coffee house
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="our-coffee" className="d-flex align-items-end">
                            Our coffee
                        </Nav.Link>
                        <Nav.Link href="pleasure" className="d-flex align-items-end">For your pleasure</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            
        </>
    )
}

export default AppHeader;