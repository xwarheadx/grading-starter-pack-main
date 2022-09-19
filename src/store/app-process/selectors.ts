import { NameSpace } from '../../const';
import { StateType } from 'types/state-type';

export const getActiveGenre = (state: StateType): string =>
  state[NameSpace.App].activeQuestGenre;
