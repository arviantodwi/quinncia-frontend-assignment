import React from 'react';
import styled, { keyframes } from 'styled-components';
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

// import Counter from './Counter';

// const Spin = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

// const Container = styled.div`
//   text-align: center;
// `;

// const Header = styled.header`
//   background-color: #282c34;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: calc(10px + 2vmin);
//   color: white;
// `;

// const Logo = styled.img`
//   animation: ${Spin} infinite 20s linear;
//   height: 40vmin;
//   pointer-events: none;
// `;

// const Link = styled.a`
//   color: #61dafb;
// `;

/* <Header>
  <Logo src={logo} alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <Link
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </Link>
  <Counter />
</Header> */
