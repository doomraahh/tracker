import { completeHabit, resetHabit, skipDay } from '../slices/habitsSlice';
import { addHistoryEntry } from '../slices/historySlice';
import { AppDispatch, RootState } from '../index';
import { HabitActionType } from '../types';

export function performHabitAction(habitId: string, action: HabitActionType) {
  return (dispatch: AppDispatch, getState: () => RootState) => {
    const habit = getState().habits.items.find((h) => h.id === habitId);
    if (!habit) return;

    switch (action) {
      case 'complete':
        dispatch(completeHabit(habitId));
        break;
      case 'skip':
        dispatch(skipDay(habitId));
        break;
      case 'reset':
        dispatch(resetHabit(habitId));
        break;
    }

    dispatch(
      addHistoryEntry({
        habitId,
        habitName: habit.name,
        action,
      }),
    );
  };
}
