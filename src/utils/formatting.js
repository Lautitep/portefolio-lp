import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  font-size: 10px;
  max-width: 450px;
`;
// returns
//    Hello,
//    world
// for Hello, \nworld
export function slashNtoBr(text) {
  const splitText = text.split('\n');
  return splitText.map((line, index) => (
    <Span key={`${line}${index}`}>
      {line}
      {splitText.length - 1 !== index && <br />}
    </Span>
  ));
}
