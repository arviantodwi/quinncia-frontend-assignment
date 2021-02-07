import React, { useRef } from 'react';
import { POST_PHOTO } from '../lib/api';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showModal, setModalContentType } from '../redux/modal';
import { pushPhotos, setActivePhoto } from '../redux/photos';

const Uploader = ({
  showModal,
  setModalContentType,
  pushPhotos,
  setActivePhoto,
}) => {
  const fileInput = useRef(null);

  const uploadPhoto = () => {
    if (!fileInput.current.files.length) return;

    const formData = new FormData();
    formData.append('profile', fileInput.current.files[0]);

    fetch(POST_PHOTO, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(res => {
        pushPhotos([res.photo]);
        setActivePhoto(res.photo._id);
        setModalContentType('update');
        showModal();
      });
  };

  return (
    <div className="file is-primary">
      <label className="file-label">
        <input
          className="file-input"
          type="file"
          accept="image/png, image/jpeg"
          onChange={uploadPhoto}
          ref={fileInput}
        />
        <span className="file-cta">
          <span className="file-label">Post New Photo</span>
        </span>
      </label>
    </div>
  );
};

Uploader.propTypes = {
  showModal: PropTypes.func.isRequired,
  setModalContentType: PropTypes.func.isRequired,
  pushPhotos: PropTypes.func.isRequired,
  setActivePhoto: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  showModal,
  setModalContentType,
  pushPhotos,
  setActivePhoto,
};

export default connect(null, mapDispatchToProps)(Uploader);
