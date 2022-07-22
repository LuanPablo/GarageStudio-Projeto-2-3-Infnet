import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUser } from "../../services/Users.service";
import { userLogin } from "../../store/User/User.actions";

export function RegisterForm ({ redirectAfterLogin }) {
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
    <Form onSubmit={handleSubmit}>
      <p className="h4">Cadastre-se</p>
      <Form.Group controlId="register-name" className="mb-3">
        <Form.Label className="m-0">Nome</Form.Label>
        <Form.Control
          placeholder="Informe seu nome"
          value={formData.name}
          onChange={handleChange}
          name="name"
          required
        />
      </Form.Group>
      <Form.Group controlId="register-email" className="mb-3">
        <Form.Label className="m-0">E-mail</Form.Label>
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
        <Form.Label className="m-0">Senha</Form.Label>
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
      <Button type='submit' disabled={isSubmiting}>Criar conta</Button>
    </Form>
  )
}