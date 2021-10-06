import {getRandomNumber} from './random-int-number.js';
import {createCommentObjects} from './blank-comments.js';


const createPhotoObject = (id) => {
  const url = `photos/${id}.jpg`;
  const likes = getRandomNumber(15,200);

  return {
    id,
    url,
    description:'Случайное описание фото',
    likes,
    comments: createCommentObjects(likes, id)};
};

const createPhotoObjects = (maxPhotos) => {
  const photos = [];
  for (let id = 1; id < maxPhotos+1; id++) {
    photos.push(createPhotoObject(id));
  }
  return photos;
};

export {createPhotoObjects};
