import React, { useState } from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <FormContainer onSubmit={handleSubmit}>
        <Label htmlFor="name">Nombre:</Label>
        <Input
          type="text"
          id="name"
          name="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Label htmlFor="message">Mensaje:</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <Label htmlFor="evidencia">Evidencia:</Label>
        <Input
          type="file"
          id="evidencia"
          name="evidencia"
          value={formData.evidencia}
          onChange={handleChange}
          required
        />

        <Button type="submit">Enviar</Button>
      </FormContainer>
    </>
  );
}

export default ContactForm;

const FormContainer = styled.form`
  display: flex;
  background-color: #333;
  border-radius: 8px;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  box-sizing: border-box;
  z-indez: -2;

  @media (max-width: 768px) {
    height: auto;
    margin: 50px auto;
  }
`;


const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  color: white;
`;

const Input = styled.input`
  color: white;
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 6px;
  }
`;

const Textarea = styled.textarea`
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 6px;
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: white;
  color: #333;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
  }
`;