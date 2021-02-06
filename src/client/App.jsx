import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import { GET_PHOTOS, GET_PHOTO_CONTENT } from './lib/api';
import PropTypes from 'prop-types';
import { pushPhotos } from './redux/photos';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

const Container = styled.div.attrs(_ => ({ className: 'container' }))`
  padding-top: 52px;
`;

const PhotosListContainer = styled.div`
  column-count: 3;
  column-gap: 16px;
  padding: 32px 0;
`;

const PhotoItem = styled.div.attrs(() => ({ className: 'card' }))`
  margin-bottom: 16px;
  display: inline-block;
`;

const PhotoList = props => {
  const photoItems = props.photos.map((item, index) => (
    <PhotoItem key={index}>
      <div className="card-image">
        <figure className="image">
          <img src={GET_PHOTO_CONTENT(item._id)} alt="" />
        </figure>
      </div>
    </PhotoItem>
  ));

  return <PhotosListContainer>{photoItems}</PhotosListContainer>;
};

const App = ({ photos, pushPhotos }) => {
  // const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(GET_PHOTOS)
      .then(res => res.json())
      .then(res => pushPhotos(res.photos));
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <PhotoList photos={photos} />
      </Container>
      <Modal />
    </>
  );
};

App.propTypes = {
  photos: PropTypes.array.isRequired,
};

const mapStateToProps = ({ photosReducer: { photos } }) => ({ photos });

const mapDispatchToProps = {
  pushPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

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
