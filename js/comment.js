import { getRandomInteger, getRandomArrayElement } from './util.js';
import { NAMES, MESSAGES, MAX_AVATARS } from './data.js';

let commentUniqueId = 0;

const createComment = () => ({
  id: commentUniqueId++,
  avatar: `img/avatar-${getRandomInteger(1, MAX_AVATARS)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

export { createComment };
