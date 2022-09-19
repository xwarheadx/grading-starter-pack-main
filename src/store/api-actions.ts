import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { generatePath } from 'react-router-dom';
import { APIRoute } from '../const';
import { AppDispatchType, StateType } from 'types/state-type';
import { OrderPostType, QuestType } from 'types/types';
import { showNotify } from 'utils';

export const fetchQuestsAction = createAsyncThunk<QuestType[], undefined, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'data/fetchQuests',
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get<QuestType[]>(APIRoute.QUESTS);

      return data;
    }
    catch(e) {
      showNotify({
        type: 'error',
        message: 'Failed to load quests',
      });
      throw e;
    }});

export const fetchDetailedQuestAction = createAsyncThunk<QuestType, string, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'data/fetchDetailedQuest',
  async (id, {extra: api}) => {
    try {
      const {data} = await api.get<QuestType>(generatePath(APIRoute.QUEST, {id}));

      return data;
    }
    catch(e) {
      showNotify({
        type: 'error',
        message: `Quest ${id} dosn't exist`,
      });
      throw e;
    }});

export const sendOrderPostAction = createAsyncThunk<void, OrderPostType, {
  dispatch: AppDispatchType,
  state: StateType,
  extra: AxiosInstance
}>(
  'order/sendOrder',
  async (order, {extra: api}) => {
    try {
      await api.post(APIRoute.ORDERS, order);
      showNotify({
        type: 'success',
        message: 'Заявка успешно отправлена!'
      });
    }
    catch(e) {
      showNotify({
        type: 'error',
        message: 'Ошибка! Заявка не отправлена'
      });
      throw e;
    }});
