import {createPhotoObjects} from './blank-photos.js';
import {getCorrectLength} from './length-checker.js';
import {renderPhotos} from './template-photos.js';

const MAX_PHOTOS = 25;
const photos = createPhotoObjects(MAX_PHOTOS);


getCorrectLength(150, 140);
renderPhotos(photos);
