import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeModal } from '../redux/modal';
import { POST_TAG, UPDATE_PHOTO } from '../lib/api';

const Container = styled.div.attrs({ className: 'modal' })``;
const Dimmer = styled.div.attrs({ className: 'modal-background' })``;
const Content = styled.div.attrs({ className: 'modal-content' })``;
const CloseButton = styled.button.attrs({
  className: 'modal-close is-large',
  'aria-label': 'close',
})``;
const ContentBox = styled.div.attrs({ className: 'box' })``;

const Modal = ({ show, contentType, activePhoto, closeModal }) => {
  const [name, setName] = useState();
  const [tag, setTag] = useState();
  // const nameInput = useRef(null);
  // const tagInput = useRef(null);

  const updatePhoto = e => {
    console.log(activePhoto);
    e.preventDefault();
    // let name = null;
    // let tags = null;
    console.log(e);
    const body = {
      name: name || '',
      tagIDs: [],
    };
    // console.log(name, tag);

    // if (nameInput.current.value) name = nameInput.current.value;
    if (tag) {
      console.log('has tags');
      const tags = tag.split(',').map(t => t.replace(/^[\s]{1,}/, ''));
      // console.log(tags);
      for (let item of tags) {
        fetch(POST_TAG, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: item }),
        })
          .then(res => res.json())
          .then(res => {});
      }
    }

    if (name) {
      console.log(name);
      fetch(UPDATE_PHOTO(activePhoto), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
        }),
      })
        .then(res => res.json())
        .then(res => console.log(res));
    }
  };

  return (
    <Container className={show && 'is-active'}>
      <Dimmer onClick={closeModal} />
      <Content>
        <ContentBox>
          {contentType == 'update' ? (
            <form onSubmit={e => updatePhoto(e)}>
              <input type="text" onChange={e => setName(e.target.value)} />
              <input type="text" onChange={e => setTag(e.target.value)} />
              <button type="submit">Save</button>
            </form>
          ) : null}
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
