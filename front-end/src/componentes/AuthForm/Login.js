import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Layout } from "../Layout";
import { LoginForm } from "./LoginForm";

export function AuthForm({ redirectAfterLogin = true }) {
  return (
    <Layout>
      <Container>
        <Row>
          <Col xs={12} lg='auto' className="flex-fill">
            <LoginForm redirectAfterLogin={redirectAfterLogin} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

const Divider = styled(Col)`
  text-align: center;
  color: #fff;
  padding: 16px 0;
  :before, :after {
    content: '';
    width: 30px;
    height: 1px;
    background-color: #999;
    display: inline-block;
    vertical-align: middle;
    margin: 0 8px;
  }
  @media (min-width: 992px) {
    padding-left: 42px;
    padding-right: 42px;
    align-self: center;
    :before,
    :after {
      display: none;
    }
  }
`