import { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../../services/Users.service";
import { Link, useNavigate } from "react-router-dom"
import { userLogin } from "../../store/User/User.actions";
import styled from "styled-components";

export function LoginForm({ redirectAfterLogin }) {
  const [isSubmiting, setIsSubmiting] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      setIsSubmiting(true)
      const userData = await login(formData)
      // Enviar para o redux
      dispatch(userLogin(userData))
      if (redirectAfterLogin) {
        navigate('/portal')
      }
    } catch (error) {
      const message = error.message === 'Credentials invalid.'
        ? 'E-mail ou senha inválidos.'
        : 'Falha ao fazer login. Tente novamente.'
      console.error(error)
      toast.error(message)
      setIsSubmiting(false)
    }
  }
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md="4" lg="4">
          <Form onSubmit={handleSubmit}>
            <p className="h2 text-white text-center mb-4">Faça seu Login</p>
            <Form.Group controlId="login-email" className="mb-3">
              <Form.Label className="m-0 text-white mb-3">E-mail</Form.Label>
              <Form.Control
                type='email'
                placeholder="exemplo@exemplo.com"
                value={formData.email}
                onChange={handleChange}
                name="email"
                required
              />
            </Form.Group>
            <Form.Group controlId="login-password " className="mb-3">
              <Form.Label className="m-0 text-white mb-3">Senha</Form.Label>
              <Form.Control
                type='password'
                placeholder="Senha de acesso"
                value={formData.password}
                onChange={handleChange}
                name="password"
                required
              />
            </Form.Group>
            <FormGroup className="d-flex flex-column">
              <BtnStyled className="mt-4" type='submit' disabled={isSubmiting}>Coninuar</BtnStyled>
              <Link className="mt-4 text-center text-white" as={Link} to="/portal/register">Não possuo cadastro</Link>
            </FormGroup>

          </Form>

        </Col>
      </Row>
    </Container>
  )
}

const BtnStyled = styled.button`
  background-color: #8672ED;
  color: #fff;
  border-radius: 3.125rem;  
  width: 20.938rem;
  padding: 0.5rem;
`