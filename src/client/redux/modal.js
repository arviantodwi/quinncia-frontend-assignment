import { MODAL_SHOW, MODAL_CLOSE, MODAL_CONTENT_TYPE } from './constants';

const defaultState = {
  show: false,
  contentType: null,
};

export const showModal = show => ({
  type: MODAL_SHOW,
});

export const closeModal = show => ({
  type: MODAL_CLOSE,
});

export const setModalContentType = contentType => ({
  type: MODAL_CONTENT_TYPE,
  payload: {
    contentType,
  },
});

const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MODAL_SHOW:
      document.getElementsByTagName('html')[0].classList.add('is-clipped');
      return Object.assign({}, state, { show: true });
    case MODAL_CLOSE:
      document.getElementsByTagName('html')[0].classList.remove('is-clipped');
      return Object.assign({}, state, defaultState);
    case MODAL_CONTENT_TYPE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default modalReducer;
