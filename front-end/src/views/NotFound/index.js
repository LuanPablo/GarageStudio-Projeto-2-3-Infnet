import { Container } from "react-bootstrap";
import { Layout } from "../../componentes/Layout";

export function NotFoundView() {
    return (
      <Layout>
        <Container className="text-center mt-4">
          <h1>Página não encontrada</h1>
        </Container>
      </Layout>
    )
  }