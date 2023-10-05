import React from "react";
import styled from "styled-components";
import WorkCard from "../components/WorkCard";
import ContactForm from "../components/ContactForm";
import { workDatas } from '../components/WorkDatas';
import Header from "../components/Header";

const Container = styled.div`
  margin: 0 0 100px;
  width: 100%;
  @media (max-width: 1024px) {
    margin: 0 0 50px;
  }
`;

const Content = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;
const Subtitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 34px;
  font-weight: 700;
  margin: 0;
  @media (max-width: 1024px) {
    font-size: 28px;
  }
`;

function Home() {
  const workHome = workDatas.slice(0, 2);
  return (
    <Container>
      <Header />
      <Content>
        <Subtitle>Mes travaux</Subtitle>
        <WorkCard workDatas={workHome}/>
        <ContactForm />
      </Content>
    </Container>
  );
}

export default Home;
