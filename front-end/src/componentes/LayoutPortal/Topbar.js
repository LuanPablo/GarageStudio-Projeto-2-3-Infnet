import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../services/Users.service";
import { useNavigate } from 'react-router-dom';
import { userLogout } from "../../store/User/User.actions";
import { selectUser } from "../../store/User/User.selectors";

export function Topbar({ onOpen }) {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    dispatch(userLogout())
    navigate('/')
  }
  return (
    <Navbar bg='light' expand='lg'>
      <Container fluid>
        <Navbar.Toggle onClick={onOpen} />
        <Nav className="ms-auto">
          <Dropdown align='end'>
            <Dropdown.Toggle variant='light'>{user.name}</Dropdown.Toggle>
            <MenuStyled>
              <Dropdown.Item onClick={handleLogout}>Sair</Dropdown.Item>
            </MenuStyled>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

const MenuStyled = styled(Dropdown.Menu)`
  position: absolute !important;
`