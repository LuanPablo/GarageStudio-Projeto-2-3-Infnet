import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { createUser } from "../../services/Users.service";
import { userLogin } from "../../store/User/User.actions";

export function RegisterForm({ redirectAfterLogin }) {
  const [isSubmiting, setIsSubmiting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
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
      const userData = await createUser(formData)
      dispatch(userLogin(userData))
      if (redirectAfterLogin) {
        navigate('/portal')
      }
    } catch (error) {
      const message = error.message === 'Email already exists'
        ? 'Este e-mail já está em uso.'
        : 'Falha ao fazer cadastro. Tente novamente.'
      toast.error(message)
      setIsSubmiting(false)
    }
  }
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md="4" lg="4">
          <Form onSubmit={handleSubmit}>
            <p className="h2 text-white text-center mb-4">Cadastre-se</p>
            <Form.Group controlId="register-name" className="mb-3">
              <Form.Label className="m-0 text-white mb-3">Nome Completo</Form.Label>
              <Form.Control
                placeholder="Informe seu nome"
                value={formData.name}
                onChange={handleChange}
                name="name"
                required
              />
            </Form.Group>
            <Form.Group controlId="register-email" className="mb-3">
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
            <Form.Group controlId="register-password" className="mb-3">
              <Form.Label className="m-0 text-white mb-3">Senha</Form.Label>
              <Form.Control
                type='password'
                placeholder="Senha de acesso"
                value={formData.password}
                onChange={handleChange}
                name="password"
                required
                minLength={4}
              />
            </Form.Group>
            <BtnStyled className="mt-4" type='submit' disabled={isSubmiting}>Continue</BtnStyled>
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