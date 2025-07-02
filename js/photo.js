import { getRandomInteger, getRandomArrayElement } from './util.js';
import { DESCRIPTIONS, MIN_LIKES, MAX_LIKES, MAX_COMMENTS } from './data.js';
import { createComment } from './comment.js';

const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from({ length: getRandomInteger(0, MAX_COMMENTS) }, createComment)
});

export { createPhoto };
