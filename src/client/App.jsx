import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.png';

const API_GET_PHOTOS = 'http://localhost:3000/api/photo/many/';
const API_GET_PHOTOS_CONTENT = id =>
  `http://localhost:3000/api/photo/content/${id}`;

const Container = styled.div.attrs(_ => ({ className: 'container' }))``;

const PhotosListContainer = styled.div`
  column-count: 3;
  column-gap: 16px;
  padding: 32px 0;
`;

const PhotoItem = styled.div.attrs(() => ({ className: 'card' }))`
  margin-bottom: 16px;
  display: inline-block;
`;

const fetchPhotos = async () => {
  const response = await fetch(API_GET_PHOTOS).then(res => res.json());

  return response.photos;
};

const getPhotoSource = id => API_GET_PHOTOS_CONTENT(id);

const PhotoList = props => {
  const photoItems = props.photos.map((item, index) => (
    <PhotoItem key={index}>
      <div className="card-image">
        <figure className="image">
          <img src={getPhotoSource(item._id)} alt="" />
        </figure>
      </div>
    </PhotoItem>
  ));

  return <PhotosListContainer>{photoItems}</PhotosListContainer>;
};

const App = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    (async () => await fetchPhotos().then(res => setPhotos(res)))();
  }, []);

  return (
    <Container>
      <PhotoList photos={photos} />
    </Container>
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
