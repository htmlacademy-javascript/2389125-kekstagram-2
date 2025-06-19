const NAMES = [
  'Иван',
  'Мария',
  'Алексей',
  'Елена',
  'Дмитрий',
  'Анна',
  'Сергей',
  'Ольга',
  'Артём',
  'Наталья',
  'Андрей',
  'Татьяна',
  'Павел',
  'Юлия',
  'Михаил'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Прекрасный закат на пляже',
  'Моя кошка утром',
  'Вид из окна офиса',
  'Наш семейный ужин',
  'Путешествие в горы',
  'Цветущий сад весной',
  'Мой новый автомобиль',
  'Фото с друзьями на вечеринке',
  'Прогулка по лесу',
  'Море в солнечный день',
  'Архитектура старого города',
  'Фото еды в ресторане',
  'Мой щенок играет',
  'Зимний пейзаж',
  'Фестиваль воздушных шаров',
  'Селфи в зеркале',
  'Книги на полке',
  'Фото с концерта',
  'Утренний кофе',
  'Спортивные достижения',
  'Рисунки на песке',
  'Фото из самолета',
  'Дождь за окном',
  'Город ночью',
  'Фото с отпуска'
];

const PHOTO_COUNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MAX_COMMENTS = 30;
const MAX_AVATARS = 6;

let commentUniqueId = 0;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => ({
  id: commentUniqueId++,
  avatar: `img/avatar-${getRandomInteger(1, MAX_AVATARS)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from({ length: getRandomInteger(0, MAX_COMMENTS) }, createComment)
});

const photos = Array.from({ length: PHOTO_COUNT }, (_, index) => createPhoto(index + 1)
);

console.log(photos);
