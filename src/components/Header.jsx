import React from 'react'
import styled from 'styled-components'
import TextSpan from "./TextSpan";
import cloudBackground from "../assets/cloud.jpg";

const Banner = styled.div`
  height: 500px;
  position: relative;
  @media (max-width: 1024px) {
    height: 400px;
  }
  @media (max-width: 768px) {
    height: 350px;
  }
`;

const Line = styled.div`
  border-bottom: 1px solid #000;
  margin-bottom: 50px;
  @media (max-width: 1024px) {
    margin-bottom: 25px;
  }
`;

const TextContainer = styled.div`
  margin-left: 100px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  @media (max-width: 1024px) {
    margin-left: 0 40px;
  }
  @media (max-width: 768px) {
    margin: 0 30px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(1.1);
`;

export default function Header() {
  const sentence = "Hello,".split("");
  const sentence2 = "I'm Laura,".split("");
  const sentence3 = "Développeuse web".split("");
  return (
    <>
      <Banner>
      <TextContainer>
        {sentence.map((letter, index) => (
          <TextSpan key={index}>{letter}</TextSpan>
          ))}
        <br/>
        {sentence2.map((letter, index) => (
          <TextSpan key={index}>{letter === " " ? "\u00A0": letter}</TextSpan>
          ))}
        <br/>
        {sentence3.map((letter, index) => (
          <TextSpan key={index}>{letter === " " ? "\u00A0": letter}</TextSpan>
          ))}
      </TextContainer>
      <Img src={cloudBackground} />
    </Banner>
    <Line />
  </>
  )
}
