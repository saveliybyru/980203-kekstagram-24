const photosBox = document.querySelector('.pictures');
const photosTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPhotos = (photos) => {
  const listFragment = document.createDocumentFragment();

  photos.forEach(({likes, comments, url}) => {
    const photosElement = photosTemplate.cloneNode(true);
    photosElement.querySelector('.picture__likes').textContent = likes;
    photosElement.querySelector('.picture__comments').textContent = comments.length;
    photosElement.querySelector('.picture__img').setAttribute('src', url);
    listFragment.appendChild(photosElement);
  });
  photosBox.appendChild(listFragment);
};

export {renderPhotos};
