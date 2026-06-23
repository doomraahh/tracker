import { configureStore } from '@reduxjs/toolkit';

import habitsReducer from './slices/habitsSlice';
import historyReducer from './slices/historySlice';

export const store = configureStore({
  reducer: {
    habits: habitsReducer,
    history: historyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
