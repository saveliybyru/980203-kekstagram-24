import { openBigPicture } from './view-photo.js';
const photosBox = document.querySelector('.pictures');
const photosTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPhotos = (photos) => {
  const listFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const photosElement = photosTemplate.cloneNode(true);
    photosElement.querySelector('.picture__likes').textContent = photo.likes;
    photosElement.querySelector('.picture__comments').textContent = photo.comments.length;
    photosElement.querySelector('.picture__img').setAttribute('src', photo.url);
    listFragment.appendChild(photosElement);

    photosElement.addEventListener('click', () => openBigPicture(photo));
  });
  photosBox.appendChild(listFragment);
};

export {renderPhotos};
