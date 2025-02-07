import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn }) => {
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/logo-placeholder.png"
            height="30"
            alt="Logo"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {!isLoggedIn ? (
              <>
                <Button variant="outline-primary" className="me-2">Iniciar Sesión</Button>
                <Button variant="primary">Registrarse</Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/profile">Perfil</Nav.Link>
                <Nav.Link href="#cart">Carrito</Nav.Link>
                <Button variant="outline-danger">Cerrar Sesión</Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;