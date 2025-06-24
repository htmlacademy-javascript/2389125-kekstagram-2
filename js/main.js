import { PHOTO_COUNT } from './data.js';
import { createPhoto } from './photo.js';

const photos = Array.from({ length: PHOTO_COUNT }, (_, index) => createPhoto(index + 1)
);

console.log(photos);
