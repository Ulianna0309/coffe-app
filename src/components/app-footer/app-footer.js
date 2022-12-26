import "./app-footer.scss";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const AppFooter = () => {
    return (
        <>
            <Navbar className="footer">
                <Container className="d-flex flex-column justify-content-center">
                    <Nav className="auto">
                        <Navbar.Brand href="#home" className="d-flex align-items-end">
                        <img
                            src="../img/coffee-border.svg"
                            width="30"
                            height="30"
                            alt="logo"
                            />
                            Coffee house
                        </Navbar.Brand>
                        <Nav.Link href="#home" className="d-flex align-items-end">Our coffee</Nav.Link>
                        <Nav.Link href="#features" className="d-flex align-items-end">For your pleasure</Nav.Link>
                    </Nav>
                    <div className="ps d-flex justify-content-center">
                        <hr/>
                        <img
                                src="../img/coffee-black.svg"
                                width="30"
                                height="30"
                                alt="logo"
                                className="ps__img"
                                />
                        <hr/>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default AppFooter;