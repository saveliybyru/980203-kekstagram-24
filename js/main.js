import {createPhotoObjects} from './blank-photos.js';
import {renderPhotos} from './template-photos.js';
import './view-photo.js';

const MAX_PHOTOS = 25;
const photos = createPhotoObjects(MAX_PHOTOS);

renderPhotos(photos);
