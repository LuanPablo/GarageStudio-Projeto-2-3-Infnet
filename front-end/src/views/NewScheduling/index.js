import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Layout } from "../../componentes/Layout";

export function NewSchedulingView() {
    return (
        <Layout>
            <Form>
                <Container>
                    <Row className="justify-content-md-center mt-5">
                        <Col md="4" lg="4">
                            <Form >
                                <p className="h2 text-white text-center mb-4">Cadastrar Novo Horário</p>
                                <FormGroup controlId="login-email" className="mb-3">
                                    <Form.Label className="m-0 text-white mb-3">E-mail</Form.Label>
                                    <Form.Control
                                        type='email'
                                        placeholder="exemplo@exemplo.com"
        
                                        name="email"
                                   
                                    />
                                </FormGroup>
                                <FormGroup controlId="login-password " className="mb-3">
                                    <Form.Label className="m-0 text-white mb-3">Senha</Form.Label>
                                    <Form.Control
                                        type='password'
                                        placeholder="Senha de acesso"
                                      
                                        name="password"
                                  
                                    />
                                </FormGroup>
                                <FormGroup className="d-flex flex-column">
                                    <Button className="mt-4" type='submit'>Coninuar</Button>
                                    <Link className="mt-4 text-center text-white" as={Link} to="/portal/register">Não possuo cadastro</Link>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </Layout>
    )
}