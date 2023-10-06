import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Skills from "../components/Skills";
import Laura from "../assets/Laura_2.png"

const Container = styled.div`
  max-width: 1000px;
  margin: 50px auto;
  @media (max-width: 1024px) {
    max-width: 800px;
  }
  @media (max-width: 768px) {
    margin: 25px auto;
  }
`;
const BlockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 110px;
  width: 100%;
  @media (max-width: 1024px) {
    gap: 50px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
    padding: 0 25px;
    box-sizing: border-box;
  }
`;
const LeftContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const RightContainer = styled.div`
  width: 55%;
  margin-top: 10px;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 30px;
  }
`;
const SkillsContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;
const Subtitle = styled.h2`
  text-transform: uppercase;
  font-size: 34px;
  font-weight: 700;
  margin: 0;
  ${({ marginTop }) => marginTop && "margin-top: 65px;"}
  @media (max-width: 1024px) {
    font-size: 28px;
  }
  @media (max-width: 768px) {
    ${({ marginTop }) => marginTop && "margin-top: 25px;"}
    text-align: center;
  }
`;
const Intro = styled.p`
  font-size: 14px;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const P = styled.p`
  font-size: 12px;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
const Img = styled.img`
  margin-top: 20px;
  height: 260px;
  transition: all 0.3s ease;
  &:hover {
      transform: scale(1.1);
    }
`;
const ExperienceContainer = styled.div`
  margin-top: 50px;
  @media (max-width: 768px) {
    margin-top: 25px;
  }
`;
const ExperienceBlock = styled.div`
  display: flex;
  gap: 30px;
  margin: 30px 0;
  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;
const Description = styled.div`
  ${({ noWidth }) => noWidth ? "" : "width: 70%"}
`;
const DescriptionTitle = styled.h3`
  font-size: 13px;
  font-weight: 600;
  margin: 0;
`;
const Date = styled.div`
  width: 30%;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 12px;
`;

function About() {
  const [isMobile, setIsMobile] = useState(true);
  const isWindowMobile = () => {
    return typeof window !== 'undefined' ? window.outerWidth < 768 : true;
  }


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isWindowMobile());
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  console.log(isMobile)
  return (
    <Container>
      <BlockContainer>
        <LeftContainer>
          <Subtitle>Laura Petit</Subtitle>
          <Img src={Laura} alt="Laura" />
          {!isMobile && (
            <>
              <Subtitle marginTop>Skills</Subtitle>
              <Skills />
            </>
          )}
        </LeftContainer>
        <RightContainer>
          <Intro>
            Enthousiaste, passionnée et avec une approche autodidacte, je suis constamment avide de nouvelles connaissances. 🌱
            <br/>
            <br/>
            Suite à mes études en marketing à l’ISCOM en 2014, j’ai débuté une carrière dans la production photo chez Publicis. En 2018, j’ai fait un virage à 360° en devenant professeur des écoles, un métier qui m'a beaucoup apporté.
            Ayant le goût du défi et après avoir passé des années à m’intéresser aux sujets techniques et au développement web, je me suis lancée dans l’aventure du Wagon en avril 2022, une formation full stack sur 9 semaines.
          </Intro>
          <ExperienceContainer>
            <ExperienceBlock>
              <Date>Oct 2022 - Actuellement</Date>
              <div style={{width: '70%'}}>
                <Description noWidth>
                  <DescriptionTitle>Développeuse Full Stack · Tilli, Paris</DescriptionTitle>
                  <P>- Développement de fonctionnalités pour le site client, le back-office, l'app web mobile boutiques et l'API associée.</P>
                  <P>- Pratique du TDD : valider la qualité du code et s'assurer que les fonctionnalités répondent aux spécifications.</P>
                  <P>- Respect des principes du clean code pour garantir un code clair, maintenable et évolutif</P>
                </Description>
                <Description noWidth style={{marginTop: '10px'}}>
                  <DescriptionTitle>Alternance Développeuse Web · OpenClassroom</DescriptionTitle>
                  <P>Construction d’un site web responsive et dynamique, création des API et BDD, optimisation des performances et réalisation de la maintenance de sites web (SEO), gestion d’un un projet web de A à Z.</P>
                </Description>
              </div>
            </ExperienceBlock>
            <ExperienceBlock>
              <Date>Avril - Juin 2022</Date>
              <Description>
                <DescriptionTitle>Formation Full-Stack · Le Wagon, Lille</DescriptionTitle>
                <P>Apprentissage des compétences d'un développeur web junior : du design à la mise en production.</P>
              </Description>
            </ExperienceBlock>
            <ExperienceBlock>
              <Date>2018 - 2022</Date>
              <Description>
                <DescriptionTitle>Professeur des écoles (PS à CM2) · Paris, Annecy</DescriptionTitle>
                <P>- Ecole La Salle, Annecy</P>
                <P>- Ecole Saint Jean de Passy, Paris 16e </P>
              </Description>
            </ExperienceBlock>
            <ExperienceBlock>
              <Date>2017 - 2018</Date>
              <Description>
                <DescriptionTitle>Acheteuse d'Art / Productrice · Score DDB, Paris</DescriptionTitle>
                <P>Responsable de l’achat d’art et de la production photographique et digitale pour le compte Picard (édition, packaging et réseaux sociaux).</P>
              </Description>
            </ExperienceBlock>
            <ExperienceBlock>
              <Date>2014 - 2016</Date>
              <Description>
                <DescriptionTitle>Productrice Photo Junior · Publicis, Paris</DescriptionTitle>
                <P>- Organisation et budgétisation des productions prints et digitales.</P>
                <P>- Sélection et coordination de l’équipe artistique, du studio et de la régie.</P>
                <P>- Supervision des repérages et casting.</P>
                <P>- Négociation des coûts & suivi administratif.</P>
              </Description>
            </ExperienceBlock>
            <ExperienceBlock>
              <Date>2014</Date>
              <Description>
                <DescriptionTitle>Master Marketing & Publicités · Iscom, Lille</DescriptionTitle>
              </Description>
            </ExperienceBlock>
          </ExperienceContainer>
        </RightContainer>
            <SkillsContainer>
              <Subtitle marginTop>Skills</Subtitle>
              <Skills />
            </SkillsContainer>
      </BlockContainer>
    </Container>
  );
}

export default About;
