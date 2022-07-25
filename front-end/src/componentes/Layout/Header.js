import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from '../../Assets/img/logo.png'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectIsUserLoggedIn } from "../../store/User/User.selectors";

export function Header () {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn)
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
              {isUserLoggedIn ? (
                <Nav.Link as={Link} to='/portal'>Dashboard</Nav.Link>
              ) : (
                <Nav.Link as={Link} to='/portal/login'>Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}