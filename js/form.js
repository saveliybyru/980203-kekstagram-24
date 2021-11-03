import {getCorrectLength} from './length-checker.js';

const form = document.querySelector('.img-upload__form');
const uploadImage = form.querySelector('input[type="file"]');
const changeFile = form.querySelector('.img-upload__overlay');
const closeForm = form.querySelector('.img-upload__cancel');
const inputHashtag = form.querySelector('.text__hashtags');
const inputComment = form.querySelector('.text__description');


const isEscape = (evt) => evt.key === 'Escape' || evt.key === 'Esc';


const onPressEsc = (evt) => {
  if(isEscape(evt) && !(inputHashtag === document.activeElement || inputComment === document.activeElement)){
    if(document.body.classList.contains('modal-open')){
      evt.preventDefault();
      changeFile.classList.add('hidden');
      document.body.classList.remove('modal-open');
      inputHashtag.value = '';
      uploadImage.value = '';
      inputComment.value = '';
      document.removeEventListener('keydown', onPressEsc);
    }
  }
};

const onInputHashtags = () => {
  const hashTags = inputHashtag.value;
  const collectionWords = hashTags.trim().split(/\s+/);
  for (let i = 0; i < collectionWords.length; i++) {
    const word = collectionWords[i];
    if (collectionWords.length >= 1 && collectionWords.length <=  5){
      if (!/^#{1}[A-Za-z0-9А-Яа-яЁё]{1,19}$/.test(word)){
        inputHashtag.setCustomValidity('Хэштег должен начинаться с # и содержать только латинские и кириллические буквы и цифры');
      } else if((collectionWords.length >= 2) && collectionWords.slice(0, -1).includes(word)) {
        inputHashtag.setCustomValidity('Хэштеги одинаковыми быть не могут');
      } else { inputHashtag.setCustomValidity('');}
    } else if (collectionWords.length > 5) {
      inputHashtag.setCustomValidity('Хэштегов должно быть не больше 5');
    } else  { inputHashtag.setCustomValidity('');}
  }inputHashtag.reportValidity();
};

const onInputComment = () =>{
  inputComment.setCustomValidity('');
  const lengthComment = inputComment.value.length;
  if (!getCorrectLength(lengthComment, 140)){
    inputComment.setCustomValidity(`Максимальная длина комментария 140 символов. Удалите ${lengthComment-140} символов для отправки`);
  }
  inputComment.reportValidity();
};

const onInputFile = () => {
  changeFile.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPressEsc);
};

closeForm.addEventListener('click', () => {
  changeFile.classList.add('hidden');
  document.body.classList.remove('modal-open');
  inputHashtag.value = '';
  uploadImage.value = '';
  inputComment.value = '';
  document.removeEventListener('keydown', onPressEsc);
});
uploadImage.addEventListener('change', onInputFile);
inputHashtag.addEventListener('input', onInputHashtags);
inputComment.addEventListener('input', onInputComment);
