import React, {useState} from 'react'
import styled from 'styled-components'
import colors from '../utils/colors'
import WorkModal from './WorkModal'
import { slashNtoBr } from '../utils/formatting'

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;
  justify-content: center;
  align-items: center;
  margin: 50px 100px 100px;
  @media (max-width: 1024px) {
    margin: 25px 50px 50px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 25px 30px 50px;
  }
`;
const CardContainer = styled.div`
  position: relative;
`;

const TextContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.9);
  color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
`;

const Card = styled.div`
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  &:hover ${TextContainer} {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  @media (max-width: 1024px) {

  }
  @media (max-width: 768px) {
  }
`;
const Img = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 5px;
  transition: filter 0.2s;
  box-shadow: 3px 5px 15px 0 rgba(155, 161, 173, 0.2), -3px 3px 3px 3px rgba(230, 234, 238, 0.2);
`;
const Title = styled.h3`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  margin-left: 30px;
`;
const P = styled.p`
  width: 500px;
  margin: 0 30px 0;
`;
const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  gap: 10px;
  padding: 0px;
  margin: 20px 30px;
  font-size: 12px;
`;
const Li = styled.li`
  border: 1px solid ${colors.white};
  color: ${colors.white};
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 10px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export default function WorkCard({ workDatas }) {
  const [modal, setModal] = useState(false);
  const [mockup, setMockup] = useState(null);
  const [pages, setPages] = useState(null);

  return (
    <div>
        <CardsContainer >
          {workDatas.map((worksData) => (
          <div key={worksData.title}>
            <CardContainer>
              <Card
                onClick={() => {
                  setModal(true);
                  setMockup(worksData.mockup);
                  setPages(worksData.pages);
                }}
              >
                <Img src={worksData.image} alt="Projet Tilli" />
                <TextContainer>
                  <Title>{worksData.title}</Title>
                  <P>{slashNtoBr(worksData.text)}</P>
                  <Ul>
                    {worksData.techno.map((techno) => (
                      <Li key={techno}>{techno}</Li>
                    ))}
                  </Ul>
                </TextContainer>
              </Card>
            </CardContainer>
          </div>
        ))}
        </CardsContainer>
        {modal && <WorkModal mockup={mockup} pages={pages} closeModal={() => setModal(false)}/>}
    </div>
  )
}
