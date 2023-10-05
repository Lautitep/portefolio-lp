import React from "react";
import styled from 'styled-components';
import close from '../assets/close.png';
import OutsideClick from './OutsideClick';

const Overlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(49, 49, 49, 0.5);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ModalContent = styled.div`
  max-width: 1000px;
  padding: 50px;
  height: 100%;
  border-radius: 5px;
  margin: 20px auto;
  background: #FFF;
  position: relative;
  overflow: scroll;
  @media (max-width: 1024px) {
    max-width: 700px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
    margin: 50px 20px;
    padding: 25px;
  }
`;

const ModalBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  overflow: scroll;
  margin-top: 50px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 50px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const Icon = styled.img`
  position: absolute;
  top: 20px;
  right: 10px;
  padding: 5px 7px;
  width: 20px;
  cursor: pointer;
`;

const ImgHeader = styled.img`
  height: 100%;
  width: 100%;
  max-width: 500px;
`;

const Img = styled.img`
  width: 100%;
  box-shadow: 5px 5px 10px #ececec, -5px -3px 10px #f0f0f0 !important;
`;

export default function WorkModal({ mockup, pages, closeModal }) {

  return (
    <Overlay>
      <OutsideClick onClose={closeModal}>
        <ModalContent>
            <Icon src={close} alt="fermer la modale" onClick={closeModal}/>
          <ModalHeader>
            <a href="https://tilli.fr/" target="_blank" rel="noreferrer">
              <ImgHeader src={mockup}/>
            </a>
          </ModalHeader>
          <ModalBody>
            {pages.map((page) => (
              <Img src={page}/>
              ))}
          </ModalBody>
        </ModalContent>
      </OutsideClick>
    </Overlay>
  );
}
