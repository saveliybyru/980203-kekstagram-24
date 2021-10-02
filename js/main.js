
const MAX_PHOTOS=25;
const NAMES = [
  'Савелий',
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Павел',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо.',
  'Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];


const getCorrectLength = (actualLength, maxLength) => {
  const result = maxLength >= actualLength;
  return result;
};
const getRandomNumber = (minValue, maxValue) => {
  const min = Math.ceil(minValue);
  const max = Math.floor(maxValue);

  if (min < 0 || max < 0) {
    return 'Вы ввели отрицательное число, выбор только из положительных';
  }

  if (min === max){
    return min;
  }

  if (min > max){
    return `Вы ввели неверно диапазон. Случайное число из диапазона от ${max} до ${min}: ${Math.floor(Math.random() * (min - max + 1)) + max}`;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const MAX_COMMENTS = getRandomNumber(1, 90);

const createCommentObject = (id) =>{
  const avatar = `img/avatar-${getRandomNumber(1, 6)}.svg`;
  const quote = MESSAGES[getRandomNumber(0, MESSAGES.length - 1)];
  const name = NAMES[getRandomNumber(0, NAMES.length - 1)];
  const message = getRandomNumber(1, 2) === 1 ? quote : quote + MESSAGES[getRandomNumber(0, MESSAGES.length - 1)];

  return {
    id,
    avatar,
    message,
    name,
  };
};
const createCommentObjects = (photoId) =>{
  const comments = [];
  for (let id = 0; id < MAX_COMMENTS+1; id++){
    comments.push(createCommentObject(id + String(`${photoId}`)));
  }
  return comments;
};


const createPhotoObject = (id) => {
  const url = `photos/${id}.jpg`;
  const likes = getRandomNumber(15,200);

  return {
    id,
    url,
    description:'Случайное описание фото',
    likes:likes,
    comments: createCommentObjects(id)};
};
const createPhotoObjects = () => {
  const photos = [];
  for (let id = 1; id < MAX_PHOTOS+1; id++) {
    photos.push(createPhotoObject(id));
  }
  return photos;
};


getCorrectLength(150, 140);
createPhotoObjects();


