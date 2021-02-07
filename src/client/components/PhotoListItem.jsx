import React from 'react';
import styled from 'styled-components';
import { GET_PHOTO_CONTENT } from '../lib/api';
import { showModal, setModalContentType } from '../redux/modal';
import { setActivePhoto } from '../redux/photos';
import { connect } from 'react-redux';
import Photo from './Photo';

const Container = styled.div.attrs(() => ({ className: 'card' }))`
  margin-bottom: 16px;
  display: inline-block;
  cursor: pointer;
`;

const PhotoContainer = ({ children }) => (
  <div className="card-image">{children}</div>
);

const PhotoListItem = ({
  photo,
  showModal,
  setModalContentType,
  setActivePhoto,
}) => {
  const onPhotoItemClick = () => {
    setModalContentType('detail');
    setActivePhoto(photo._id);
    showModal();
  };

  return (
    <Container onClick={onPhotoItemClick}>
      <PhotoContainer>
        <Photo source={GET_PHOTO_CONTENT(photo._id)} />
      </PhotoContainer>
    </Container>
  );
};

const mapDispatchToProps = {
  showModal,
  setModalContentType,
  setActivePhoto,
};

export default connect(null, mapDispatchToProps)(PhotoListItem);
