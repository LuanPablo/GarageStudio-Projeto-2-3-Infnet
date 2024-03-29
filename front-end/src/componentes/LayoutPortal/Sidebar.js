import { CloseButton, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { SidebarItem } from "./Sidebaritem.js";
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/User/User.selectors'
import Logo from '../../Assets/img/logo.png'
import { Link } from "react-router-dom";

const menuItems = [
    {
        to: '/portal',
        text: 'Dashboard',
        checkAllPath: true,
        userTypes: [1, 2]
    },
    {
        to: '/portal/schedulings',
        text: 'Agendamentos',
        checkAllPath: false,
        userTypes: [1]
    }
]

export function Sidebar({ isOpen, onClose }) {
    const { type } = useSelector(selectUser)
    return (
        <SidebarStyled className="bg-dark text-white d-flex flex-column p-3" isOpen={isOpen}>
            <CloseButton variant="white" onClick={onClose} className='ms-auto d-lg-none' />
           
            <Navbar.Brand as={Link} to='/'>
            <img src={Logo} alt='Garage Studio' width={115} height={19} />
            </Navbar.Brand>
            <hr />

            <Nav variant="pills" className="flex-column">
                {menuItems.filter(item => item.userTypes.includes(type)).map((item, index) => (
                    <SidebarItem key={index} item={item} />
                ))}
            </Nav>
        </SidebarStyled>
    )
}

const SidebarStyled = styled.header`
    width: 280px;
    @media (max-width: 991px) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100vh;
    margin-left: -100%;
    transition: all .2s linear;
    ${(props) => props.isOpen && `
      margin-left: 0;
    `}
  }
`