const scaleChanger = document.querySelector('.img-upload__scale');
const scaleUpperElement = scaleChanger.querySelector('.scale__control--bigger');
const scaleLowerElement = scaleChanger.querySelector('.scale__control--smaller');
const scaleLevelElement = scaleChanger.querySelector('.scale__control--value');
const photoElement = document.querySelector('.img-upload__preview img');
const effectIntensiveElement = document.querySelector('.effect-level__value');
const sliderEffectLevelElement = document.querySelector('.effect-level__slider');
const effectsVariantsElement = document.querySelector('.img-upload__effects');

const currentEffect =
{
  'chrome':
  {
    'style' : 'grayscale',
    'settings':
    {
      range:
      {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
      connect: 'lower',
    },
    'units' : '',
  },
  'sepia':
  {
    'style' : 'sepia',
    'settings':
    {
      range:
      {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
      connect: 'lower',
    },
    'units' : '',
  },
  'marvin':
  {
    'style' : 'invert',
    'settings':
    {
      range:
      {
        min: 1,
        max: 100,
      },
      start: 100,
      step: 1,
      connect: 'lower',
    },
    'units' : '%',
  },
  'phobos':
  {
    'style' : 'blur',
    'settings':
    {
      range:
      {
        min: 0,
        max: 3 },
      start: 3,
      step: 0.1,
      connect: 'lower',
    },
    'units' : 'px',
  },
  'heat':
  {
    'style' : 'brightness',
    'settings':
    {
      range:
      {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
      connect: 'lower',
    },
    'units' : '',
  },
};


const onClickMinus = () => {
  if (+scaleLevelElement.value.split('%')[0] > 25) {
    const changedScaleValue = +scaleLevelElement.value.split('%')[0] - 25;
    scaleLevelElement.value  = `${changedScaleValue}%`;
    photoElement.style.transform = `scale(${changedScaleValue/100})`;
  }
};

const onClickPlus = () => {
  if (+scaleLevelElement.value.split('%')[0] < 100) {
    const changedScaleValue = +scaleLevelElement.value.split('%')[0] + 25;
    scaleLevelElement.value = `${changedScaleValue}%`;
    photoElement.style.transform = `scale(${changedScaleValue/100})`;
  }
};

const onApplyEffect = (evt) => {
  const effectName = evt.target.value;
  if (effectName === 'none'){
    photoElement.className = '';
    photoElement.style = '';
    if (sliderEffectLevelElement.noUiSlider) {
      sliderEffectLevelElement.noUiSlider.destroy();
    }
  }
  else {
    if (evt.target.matches('.effects__radio')){
      if (sliderEffectLevelElement.noUiSlider) {
        sliderEffectLevelElement.noUiSlider.destroy();
      }
      photoElement.className = '';
      photoElement.classList.add(`effects__preview--${effectName}`);
      noUiSlider.create(sliderEffectLevelElement, currentEffect[effectName].settings);
      sliderEffectLevelElement.noUiSlider.on('update', (_, handle, unencoded) => {
        const volume = unencoded[handle];
        photoElement.style = `filter:${currentEffect[effectName].style}(${volume}${currentEffect[effectName].units})`;
        effectIntensiveElement.value = volume;
      });
    }
  }
};

scaleUpperElement.addEventListener('click', onClickPlus);
scaleLowerElement.addEventListener('click', onClickMinus);
effectsVariantsElement.addEventListener('click', onApplyEffect);
