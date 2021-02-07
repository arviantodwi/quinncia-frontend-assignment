import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setModalContentType } from '../redux/modal';

const Button = ({ setModalContentType }) => {
  const onEditButtonClick = () => {
    setModalContentType('update');
  };

  return (
    <button className="button is-success" onClick={onEditButtonClick}>
      Edit
    </button>
  );
};

Button.propTypes = {
  setModalContentType: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  setModalContentType,
};

export const EditButton = connect(null, mapDispatchToProps)(Button);

const ModalDetail = () => {
  return (
    <>
      <h1 className="title">Title</h1>
      <div className="tags">
        <span className="tag">One</span>
        <span className="tag">Two</span>
        <span className="tag">Three</span>
      </div>
    </>
  );
};

export default ModalDetail;
