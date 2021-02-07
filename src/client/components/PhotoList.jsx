import React, { useEffect } from 'react';
import PhotoListItem from './PhotoListItem';
import styled from 'styled-components';
import { GET_PHOTOS } from '../lib/api';
import PropTypes from 'prop-types';
import { pushPhotos } from '../redux/photos';
import { connect } from 'react-redux';

const Container = styled.div`
  column-count: 3;
  column-gap: 16px;
  padding: 32px 0;
`;

const PhotoList = ({ photos, pushPhotos }) => {
  const photoItems = photos.map((p, index) => (
    <PhotoListItem key={index} photo={p} />
  ));

  useEffect(() => {
    fetch(GET_PHOTOS)
      .then(res => res.json())
      .then(res => pushPhotos(res.photos));
  }, []);

  return <Container>{photoItems}</Container>;
};

PhotoList.propTypes = {
  photos: PropTypes.array.isRequired,
};

const mapStateToProps = ({ photosReducer: { photos } }) => ({ photos });

const mapDispatchToProps = {
  pushPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);
