import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../../services/Users.service";
import { useNavigate } from "react-router-dom"
import { userLogin } from "../../store/User/User.actions";

export function LoginForm ({ redirectAfterLogin }) {
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
    <Form onSubmit={handleSubmit}>
      <p className="h4">Login</p>
      <Form.Group controlId="login-email" className="mb-3">
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
      <Form.Group controlId="login-password" className="mb-3">
        <Form.Label className="m-0">Senha</Form.Label>
        <Form.Control
          type='password'
          placeholder="Senha de acesso"
          value={formData.password}
          onChange={handleChange}
          name="password"
          required
        />
      </Form.Group>
      <Button type='submit' disabled={isSubmiting}>Entrar</Button>
    </Form>

  )
}