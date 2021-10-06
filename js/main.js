import {createPhotoObjects} from './blank-photos.js';


const MAX_PHOTOS = 25;

const getCorrectLength = (actualLength, maxLength) => {
  const result = maxLength >= actualLength;
  return result;
};


getCorrectLength(150, 140);
createPhotoObjects(MAX_PHOTOS);
