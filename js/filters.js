const scaleChanger = document.querySelector('.img-upload__scale');
const scaleUpperElement = scaleChanger.querySelector('.scale__control--bigger');
const scaleLowerElement = scaleChanger.querySelector('.scale__control--smaller');
const scaleLevelElement = scaleChanger.querySelector('.scale__control--value');
const photoElement = document.querySelector('.img-upload__preview img');


const onClickMinus = () => {
  const scaleValue = +scaleLevelElement.value.split('%')[0];
  if (scaleValue < 100) {
    scaleLevelElement.value = `${scaleValue + 25}%`;
    photoElement.style.transform = `scale(${scaleValue/100})`;
  }

};

const onClickPlus = () => {
  const scaleValue = +scaleLevelElement.value.split('%')[0];
  if (scaleValue > 25) {
    scaleLevelElement.value  = `${scaleValue - 25}%`;
    photoElement.style.transform = `scale(${scaleValue/100})`;
  }
};


scaleUpperElement.addEventListener('click', onClickMinus);
scaleLowerElement.addEventListener('click', onClickPlus);

