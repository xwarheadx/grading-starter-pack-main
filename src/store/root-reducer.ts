import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { detailedQuestData } from './detailed-quest-data/detailed-quest-data';
import { orderData } from './order-data/order-data';
import { questsData } from './quests-data/quests-data';
import { appProcess } from './app-process/app-process';

export const rootReducer = combineReducers({
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.DetailedQuest]: detailedQuestData.reducer,
  [NameSpace.Quests]: questsData.reducer,
  [NameSpace.Orders]: orderData.reducer,
});
