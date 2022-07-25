import { Button, Container } from "react-bootstrap";
import { Layout } from "../../componentes/Layout";
import Banner from '../../Assets/img/banner.png'
import { Link } from "react-router-dom";

export function HomeView() {
  return (
    <Layout>
      <Container className="container">
        <div className='d-md-flex my-4 align-items-center banner-home pt-5'>
          <div>
            <img src={Banner} alt='Garage Studio' width={680} height={480} className='img-fluid mt-4' />
          </div>

          <div className="p-5">
            <h1>A maior rede de estúdios</h1>
            <p>A Garage Studio é uma rede de referência especializada em</p>
            <p>gravação, produção musical, mixagem, masterização.</p>
            <Button as={Link} to='/studios' className='text-uppercase btn-agendar'>Agendar</Button>
          </div>

        </div>
      </Container>
    </Layout>
  )
}