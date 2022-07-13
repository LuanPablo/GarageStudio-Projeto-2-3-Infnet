import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from '../../assets/img/logo.png'

export function Header() {
  return (
    <header>
      <Navbar className='main-navbar' expand='md'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img src={Logo} alt='Garage Studio' width={115} height={19} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar-header' />
          <Navbar.Collapse id='navbar-header'>
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='/studios'>Agendar</Nav.Link>
              <Nav.Link as={Link} to='/'>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}