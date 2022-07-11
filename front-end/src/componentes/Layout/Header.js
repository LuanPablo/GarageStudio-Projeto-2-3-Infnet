import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from '../../Assets/img/logo.png'

export function Header() {
    return (
      <header>
        <Navbar className='main-navbar' expand='md'>
          <Container>
            <Navbar.Brand>
              <img src={Logo} alt='Garage Studio' width={115} height={19} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar-header' />
            <Navbar.Collapse id='navbar-header'>
              <Nav className='ms-auto'>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/'>Agendar</Nav.Link>
                <Nav.Link href='/'>Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  }