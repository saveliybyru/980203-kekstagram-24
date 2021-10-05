import {getRandomNumber} from './random-int-number.js';


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


const createCommentObject = (id) => {
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

const createCommentObjects = (maxComments, photoId) => {
  const comments = [];
  for (let id = 0; id < maxComments+1; id++) {
    comments.push(createCommentObject(id + String(`${photoId}`)));
  }
  return comments;
};

export{createCommentObjects};
