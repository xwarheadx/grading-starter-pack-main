import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_SELECTION, NameSpace } from '../../const';

export type AppProcessType = {
  activeQuestGenre: string;
}

const initialState: AppProcessType = {
  activeQuestGenre: DEFAULT_SELECTION
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.activeQuestGenre = action.payload;
    }}
});

export const {changeGenre} = appProcess.actions;
