import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { HabitActionType, HistoryEntry } from '../types';

interface HistoryState {
  entries: HistoryEntry[];
}

const initialState: HistoryState = {
  entries: [],
};

interface AddHistoryPayload {
  habitId: string;
  habitName: string;
  action: HabitActionType;
}

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addHistoryEntry: (state, action: PayloadAction<AddHistoryPayload>) => {
      state.entries.unshift({
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        habitId: action.payload.habitId,
        habitName: action.payload.habitName,
        action: action.payload.action,
        timestamp: new Date().toISOString(),
      });
    },
  },
});

export const { addHistoryEntry } = historySlice.actions;
export default historySlice.reducer;
