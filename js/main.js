import './template-photos.js';

const getCorrectLength = (actualLength, maxLength) => {
  const result = maxLength >= actualLength;
  return result;
};


getCorrectLength(150, 140);
