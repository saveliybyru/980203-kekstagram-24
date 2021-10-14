import {createPhotoObjects} from './blank-photos.js';

const MAX_PHOTOS = 25;

const photosBox = document.querySelector('.pictures');
const photosTemplate = document.querySelector('#picture').content.querySelector('.picture');
const listFragment = document.createDocumentFragment();

const photos = createPhotoObjects(MAX_PHOTOS);

photos.forEach(({likes, comments, url}) => {
  const photosElement = photosTemplate.cloneNode(true);
  photosElement.querySelector('.picture__likes').textContent = likes;
  photosElement.querySelector('.picture__comments').textContent = comments.length;
  photosElement.querySelector('.picture__img').setAttribute('src', `${url}`);
  listFragment.appendChild(photosElement);
});


photosBox.appendChild(listFragment);
