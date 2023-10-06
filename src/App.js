import React from 'react';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavbarHorizontal';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import ContactForm from './components/ContactForm';


const Container = styled.div`
  margin: 0 auto;
`;

function App() {


  return (
    <Router>
      <Container>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
