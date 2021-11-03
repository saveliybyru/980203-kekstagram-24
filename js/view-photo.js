import { renderComments } from './view-comment.js';
const photoView = document.querySelector('.big-picture');
const closeModal = photoView.querySelector('.big-picture__cancel');
const commentLoader = photoView.querySelector('.comments-loader');

const isEscape = (evt) => evt.key === 'Escape' || evt.key === 'Esc';


const pressEsc = (evt) => {
  if (isEscape(evt) && document.body.classList.contains('modal-open')){
    evt.preventDefault();
    photoView.classList.add('hidden');
    commentLoader.classList.remove('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', pressEsc);
  }
};


const openBigPicture = (photo) => {
  const likesCount = document.querySelector('.likes-count');
  const commentCounter = document.querySelector('.comments-count');
  const photoDescription = document.querySelector('.social__caption');
  photoView.querySelector('.big-picture__img img').src = photo.url;
  likesCount.textContent = photo.likes;
  commentCounter.textContent = photo.comments.length;
  photoDescription.textContent = photo.description;

  photoView.classList.remove('hidden');
  commentLoader.classList.add('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', pressEsc);

  photo.comments.forEach(renderComments);
};


closeModal.addEventListener('click', () => {
  photoView.classList.add('hidden');
  commentLoader.classList.remove('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', pressEsc);
});


export {openBigPicture};
