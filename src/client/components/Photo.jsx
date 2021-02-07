import React from 'react';

const Photo = ({ source }) => (
  <figure className="image is-fullwidth">
    <img src={source} />
  </figure>
);

export default Photo;
