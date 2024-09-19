import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <LoginContainer>
      <Title>
        <h1>
        Facil <span>work</span>
        </h1>
      </Title>
      <Subtitle>Ingresar</Subtitle>
      <LoginForm>
        <Input type="text" placeholder="Usuario" />
        <Input type="password" placeholder="Contraseña" />
        <Button>
          <StyledLink to="/ navbar">Login</StyledLink>
        </Button>
        <Button>
          <StyledLink to="/ register">No tengo cuenta</StyledLink>
        </Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #333;
`;

const Title = styled.h1`
  h1 {
    color: white;
    font-weight: 400;
    margin: 10px;
    span {
      font-weight: bold;
    }
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 10px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: black;
  text-decoration: none;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 5px;
  width: 100%;

  &:hover {
    background-color: gray;
  }

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
