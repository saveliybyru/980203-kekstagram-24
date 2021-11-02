const form = document.querySelector('.img-upload__form');
const uploadImage = form.querySelector('input[type="file"]');
const changeFile = form.querySelector('.img-upload__overlay');
const closeForm = form.querySelector('.img-upload__cancel');
const inputHashtag = form.querySelector('.text__hashtags');


const isEscape = (evt) => evt.key === 'Escape' || evt.key === 'Esc';


const pressEsc = (evt) => {
  if (isEscape(evt) && document.body.classList.contains('modal-open')){
    evt.preventDefault();
    changeFile.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', pressEsc);
  }
};


const doCorrectHashtags = () => {
  const hashTags = inputHashtag.value;
  const collectionWords = hashTags.trim().split(' ');
  if (collectionWords.length > 5){
    inputHashtag.setCustomValidity('Хэштегов должно быть не больше 5');
  } else if (hashTags >= 1 && collectionWords.length <=  5) {
    collectionWords.forEach( (word) => {
      if(!/^#[A-Za-z0-9А-Яа-яЁё]{1,19}/.test(word)){
        inputHashtag.setCustomValidity('Хэштег должен начинаться с # и содержать только латинские и кириллические буквы и цифры');
      }
    });
  } else {inputHashtag.setCustomValidity('');}
  inputHashtag.reportValidity();
};


const onInputFile = () => {
  changeFile.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', pressEsc);
};

closeForm.addEventListener('click', () => {
  changeFile.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', pressEsc);
});

uploadImage.addEventListener('change', onInputFile);

inputHashtag.addEventListener('input', doCorrectHashtags);

///  /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/
