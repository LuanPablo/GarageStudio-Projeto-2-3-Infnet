import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import Logo from './Assets/img/logo.png'
import Banner from './Assets/img/banner.png'

function Header() {
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

function Footer() {
  return (
    <footer className='footer text-center py-2 mt-4'>
      <p className='m-0'>Todos os direitos reservados</p>
    </footer>
  )
}
function HomeView() {

  return (
    <>
      <Header />
      <main>
        <Container>
          <div className='d-md-flex my-4 align-items-center banner-home'>
            <div>
              <img src={Banner} alt='Garage Studio' width={680} height={480} className='img-fluid mt-4' />
            </div>
            <div className='ms-auto'>
              <h1>A maior rede de estúdios</h1>
              <p>A Garage Studio é uma rede de referência especializada em</p>
              <p>gravação, produção musical, mixagem, masterização.</p>
              <Button className='text-uppercase'>Agendar</Button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}

function App() {
  return <HomeView />;
}

export default App;
