export const DEFAULT_SELECTION = 'all-quests';
export const PHONE_NUMBER_LENGTH = 10;
export const PHONE_NUMBER_FORMAT = /^[0-9]+$/;

export const AppRoute = {
  MAIN: '/',
  CONTACTS: '/contacts',
  QUEST: '/detailed-quest/:id',
  PAGE404: '*',
};

export const APIRoute = {
  QUESTS: '/quests',
  QUEST: '/quests/:id',
  ORDERS: '/orders'
} as const;

export const enum LoadingStatus {
  Idle = 'IDLE',
  Pending = 'PENDING',
  Fulfilled = 'FULFILLED',
  Rejected = 'REJECTED',
}

export const NameSpace = {
  App: 'APP',
  DetailedQuest: 'DETAILED_QUEST',
  Quests: 'QUESTS',
  Orders: 'ORDERS',
} as const;

export const QuestGenresName: {[key: string]: string} = {
  'all-quests': 'Все квесты',
  'adventures': 'Приключения',
  'horror': 'Ужасы',
  'mystic': 'Мистика',
  'detective': 'Детектив',
  'sci-fi': 'Sci-fi',
} as const;

export const Levels: {[key: string]: string} = {
  hard: 'сложный',
  medium: 'средний',
  easy: 'легкий'
} as const;
