import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";
import colors from "../utils/colors";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 50px 100px;
  max-width: 1250px;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px;
  }
  @media (max-width: 768px) {
    margin: 30px;
  }
`;

const TextContainer = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 34px;
  font-weight: 700;
  margin: 0;
  @media (max-width: 1024px) {
    font-size: 28px;
    text-align: center;
  }
`;

const P = styled.p`
  font-size: 16px;
  @media (max-width: 1024px) {
    font-size: 14px;
    text-align: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  @media (max-width: 1024px) {
    max-width: 500px;
  }
`;

const RowInput = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  border-radius: 0;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid ${colors.black};
  ${props => props.width && 'width: 215px'};
  &::placeholder {
    font-weight: 700;
  }
  @media (max-width: 768px) {
    ${props => props.width && 'width: unset'};
  }
`;

const Textarea = styled.textarea`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid ${colors.black};
  border-radius: 0;
  font-family: 'Poppins', sans-serif;
  &::placeholder {
    font-weight: 700;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: ${colors.black};
  color: #fff;
  border: none;
  cursor: pointer;
`;

const A = styled.a`
  color: ${colors.black};
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getBackendURL = () => {
    if (process.env.NODE_ENV === 'development') {
      return 'http://localhost:5000';
    }
    return 'https://portfolio-lp-backend-c94f17d883ed.herokuapp.com';
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${getBackendURL()}/send-email`;
    try {
      const response = await axios.post(url, formData);
      console.log(response.data); // Display success message from the backend
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <Container>
      <TextContainer>
        <Title>Me contacter</Title>
        <P>N'hésitez pas à me contacter via ce formulaire<br/> ou par <A href="mailto:lau.petit0@gmail.com">e-mail</A> 😊</P>
      </TextContainer>
      <Form onSubmit={handleSubmit}>
        <RowInput>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="PRÉNOM"
            width
          />
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-MAIL"
            width
          />
        </RowInput>

        {/* <Label htmlFor="subject">Subject</Label> */}
        <Input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="OBJET"
          />

        {/* <Label htmlFor="message">Message</Label> */}
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          placeholder="MESSAGE"
          />

        <Button type="submit">Envoyez moi votre message 🤍</Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
