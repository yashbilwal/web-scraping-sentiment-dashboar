// frontend/src/components/Navbar.js
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Sentiment Dashboard</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
