const API = 'http://localhost:3000/api';

export const GET_PHOTOS = `${API}/photo/many`;
export const GET_PHOTO_CONTENT = id => `${API}/photo/content/${id}`;
export const POST_PHOTO = `${API}/photo/`;
export const UPDATE_PHOTO = id => `${API}/photo/${id}`;

export const GET_TAGS = `${API}/tag/many`;
export const POST_TAG = `${API}/tag`;
