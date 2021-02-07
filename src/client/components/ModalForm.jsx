import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { POST_TAG, UPDATE_PHOTO } from '../lib/api';
import { setModalContentType } from '../redux/modal';

const Button = ({ setModalContentType }) => {
  const onSaveUpdateButtonClick = () => {
    setModalContentType('detail');
  };
  return (
    <button className="button is-success" onClick={onSaveUpdateButtonClick}>
      Save changes
    </button>
  );
};

Button.propTypes = {
  setModalContentType: PropTypes.func.isRequired,
};

const mapDispatchToButtonProps = {
  setModalContentType,
};

export const SaveUpdateButton = connect(null, mapDispatchToButtonProps)(Button);

const ModalForm = ({ setModalContentType }) => {
  const [name, setName] = useState();
  const [tags, setTags] = useState();

  const updatePhoto = e => {
    e.preventDefault();
    setModalContentType('detail');
    // console.log(activePhoto);
    // console.log(e);
    // const body = {
    //   name: name || '',
    //   tagIDs: [],
    // };
    // // console.log(name, tag);

    // // if (nameInput.current.value) name = nameInput.current.value;
    // if (tag) {
    //   console.log('has tags');
    //   const tags = tag.split(',').map(t => t.replace(/^[\s]{1,}/, ''));
    //   // console.log(tags);
    //   for (let item of tags) {
    //     fetch(POST_TAG, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ name: item }),
    //     })
    //       .then(res => res.json())
    //       .then(res => {});
    //   }
    // }

    // if (name) {
    //   console.log(name);
    //   fetch(UPDATE_PHOTO(activePhoto), {
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       name,
    //     }),
    //   })
    //     .then(res => res.json())
    //     .then(res => console.log(res));
    // }
  };

  return (
    <form onSubmit={e => updatePhoto(e)}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Text input"
            onChange={e => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Tags</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Text input"
            onChange={e => setTags(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
};

ModalForm.propTypes = {
  setModalContentType: PropTypes.func.isRequired,
};

const mapDispatchToFormProps = Object.assign({}, mapDispatchToButtonProps);

export default connect(null, mapDispatchToFormProps)(ModalForm);
