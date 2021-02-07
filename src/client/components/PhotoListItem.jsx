import React from 'react';
import styled from 'styled-components';
import { GET_PHOTO_CONTENT } from '../lib/api';
import { showModal, setModalContentType } from '../redux/modal';
import { connect } from 'react-redux';

const Container = styled.div.attrs(() => ({ className: 'card' }))`
  margin-bottom: 16px;
  display: inline-block;
  cursor: pointer;
`;

const Photo = ({ source }) => (
  <div className="card-image">
    <figure className="image">
      <img src={source} alt={''} />
    </figure>
  </div>
);

const PhotoListItem = ({ photo, showModal, setModalContentType }) => {
  const onPhotoItemClick = () => {
    setModalContentType('detail');
    showModal();
  };

  return (
    <Container onClick={onPhotoItemClick}>
      <Photo source={GET_PHOTO_CONTENT(photo._id)} />
    </Container>
  );
};

// const mapStateToProps = () => ();

const mapDispatchToProps = {
  showModal,
  setModalContentType,
};

export default connect(null, mapDispatchToProps)(PhotoListItem);
