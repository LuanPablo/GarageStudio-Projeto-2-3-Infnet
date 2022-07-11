import { Container, Nav, Navbar } from 'react-bootstrap'
import Logo from './Assets/img/logo.png'



function Header() {
  return (
    <header>
      <Navbar className='main-navbar' expand='md'>
        <Container>
          <Navbar.Brand>
            <img src={Logo} alt='Garage Studio' width={72} height={15} />
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

function Footer (){
  return(
    <footer className='footer text-center py-2 mt-4'>
      <p className='m-0'>Todos os direitos reservados</p>
    </footer>
  )
}
function HomeView() {

  return (
    <>
      <Header />
      <main />
      <Footer />
    </>
  )
}

function App() {
  return <HomeView />;
}

export default App;
