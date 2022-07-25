import { Container } from "react-bootstrap"
import styled from "styled-components"
import { AuthForm } from "../../componentes/AuthForm/Register"

export function RegisterView() {
  return (
    <AuthForm />
  )
}

const Background = styled.main`
  background-color: #1D182C;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`