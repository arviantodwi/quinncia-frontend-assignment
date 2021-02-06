const API = 'http://localhost:3000/api';

export const GET_PHOTOS = `${API}/photo/many`;
export const GET_PHOTO_CONTENT = id => `${API}/photo/content/${id}`;
export const POST_PHOTO = `${API}/photo/`;
