import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeModal } from '../redux/modal';

const Container = styled.div.attrs({ className: 'modal' })``;
const Dimmer = styled.div.attrs({ className: 'modal-background' })``;
const Content = styled.div.attrs({ className: 'modal-content' })``;
const CloseButton = styled.button.attrs({
  className: 'modal-close is-large',
  'aria-label': 'close',
})``;
const ContentBox = styled.div.attrs({ className: 'box' })``;

const Modal = ({ show, closeModal }) => {
  return (
    <Container className={show && 'is-active'}>
      <Dimmer onClick={closeModal} />
      <Content>
        <ContentBox>{/*  */}</ContentBox>
      </Content>
      <CloseButton onClick={closeModal} />
    </Container>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ modalReducer: { show } }) => ({ show });

const mapDispatchToProps = {
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
