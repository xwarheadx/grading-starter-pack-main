import { createSelector } from '@reduxjs/toolkit';
import { DEFAULT_SELECTION, LoadingStatus, NameSpace } from '../../const';
import { getActiveGenre } from 'store/app-process/selectors';
import { StateType } from 'types/state-type';
import { QuestType } from 'types/types';

export const getQuests = (state: StateType): QuestType[] =>
  state[NameSpace.Quests].quests;

export const getQuestsDataLoadedStatus = (state: StateType): LoadingStatus =>
  state[NameSpace.Quests].questsLoadingStatus;

export const selectFilteredQuests = createSelector(
  getQuests,
  getActiveGenre,
  (quests, genre) => {
    if (genre === DEFAULT_SELECTION) {
      return quests;
    }

    return quests.filter((quest) => quest.type === genre);
  });
