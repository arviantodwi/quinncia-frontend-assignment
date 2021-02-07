import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeModal } from '../redux/modal';
import { GET_PHOTO_CONTENT } from '../lib/api';
import ModalDetail, { EditButton } from './ModalDetail';
import ModalForm, { SaveUpdateButton } from './ModalForm';
import Photo from './Photo';

const Container = styled.div.attrs({ className: 'modal' })``;
const Dimmer = styled.div.attrs({ className: 'modal-background' })``;
const Content = styled.div.attrs({ className: 'modal-content' })``;
const CloseButton = styled.button.attrs({
  className: 'modal-close is-large',
  'aria-label': 'close',
})``;
const ContentBox = styled.div.attrs({ className: 'box' })`
  padding: 0 !important;
`;
const Body = styled.section.attrs({ className: 'modal-card-body' })`
  backgroundcolor: 'transparent';
`;
const Footer = ({ children }) => (
  <footer className="modal-card-foot">{children}</footer>
);

const Modal = ({ show, contentType, activePhoto, closeModal }) => {
  return (
    <Container className={show && 'is-active'}>
      <Dimmer onClick={closeModal} />
      <Content>
        <ContentBox>
          <Body>
            <Photo source={GET_PHOTO_CONTENT(activePhoto)} />
            {contentType == 'update' ? <ModalForm /> : <ModalDetail />}
          </Body>
          <Footer>
            {contentType == 'update' ? <SaveUpdateButton /> : <EditButton />}
          </Footer>
        </ContentBox>
      </Content>
      <CloseButton onClick={closeModal} />
    </Container>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
};

const mapStateToProps = ({
  modalReducer: { show, contentType },
  photosReducer: { activePhoto },
}) => ({
  show,
  contentType,
  activePhoto,
});

const mapDispatchToProps = {
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
