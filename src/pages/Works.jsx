import React from 'react'
import styled from 'styled-components'
import WorkCard from '../components/WorkCard'
import { workDatas } from '../components/WorkDatas'

const Container = styled.div`
  margin: 50px auto;
  max-width: 1250px;
`;

const Subtitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 34px;
  font-weight: 700;
  margin: 0;
`;

export default function Works() {
  return (
    <Container>
      <Subtitle>Mes travaux</Subtitle>
      <WorkCard workDatas={workDatas}/>
    </Container>
  )
}
