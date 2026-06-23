import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Habit } from '../types';

const PROGRESS_STEP = 10;

const initialHabits: Habit[] = [
  { id: '1', name: 'Зарядка', progress: 30 },
  { id: '2', name: 'Чтение', progress: 50 },
  { id: '3', name: 'Медитация', progress: 20 },
];

interface HabitsState {
  items: Habit[];
}

const initialState: HabitsState = {
  items: initialHabits,
};

function clampProgress(value: number): number {
  return Math.min(100, Math.max(0, value));
}

const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    completeHabit: (state, action: PayloadAction<string>) => {
      const habit = state.items.find((h) => h.id === action.payload);
      if (habit) {
        habit.progress = clampProgress(habit.progress + PROGRESS_STEP);
      }
    },
    skipDay: (state, action: PayloadAction<string>) => {
      const habit = state.items.find((h) => h.id === action.payload);
      if (habit) {
        habit.progress = clampProgress(habit.progress - PROGRESS_STEP);
      }
    },
    resetHabit: (state, action: PayloadAction<string>) => {
      const habit = state.items.find((h) => h.id === action.payload);
      if (habit) {
        habit.progress = 0;
      }
    },
  },
});

export const { completeHabit, skipDay, resetHabit } = habitsSlice.actions;
export default habitsSlice.reducer;
