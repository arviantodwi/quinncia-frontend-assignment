import { PHOTOS_PUSH, PHOTOS_ACTIVE_PHOTO } from './constants';

const defaultState = {
  photos: [],
  activePhoto: null,
};

export const pushPhotos = photos => ({
  type: PHOTOS_PUSH,
  payload: {
    photos,
  },
});

export const setActivePhoto = id => ({
  type: PHOTOS_ACTIVE_PHOTO,
  payload: {
    activePhoto: id,
  },
});

const photosReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PHOTOS_PUSH:
      return Object.assign({}, state, {
        photos: [...state.photos, ...action.payload.photos],
      });
    default:
      return state;
  }
};

export default photosReducer;
