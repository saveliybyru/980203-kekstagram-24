const getRandomNumber = (minValue, maxValue) => {
  const min = Math.ceil(minValue);
  const max = Math.floor(maxValue);

  if (min < 0 || max < 0) {
    return 'Вы ввели отрицательное число, выбор только из положительных';
  }

  if (min === max) {
    return min;
  }

  if (min > max) {
    return `Вы ввели неверно диапазон. Случайное число из диапазона от ${max} до ${min}: ${Math.floor(Math.random() * (min - max + 1)) + max}`;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export {getRandomNumber};
