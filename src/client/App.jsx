import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import PhotoList from './components/PhotoList';

const Container = styled.div.attrs(_ => ({ className: 'container' }))`
  padding-top: 52px;
`;

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <PhotoList />
      </Container>
      <Modal />
    </>
  );
};

export default App;
