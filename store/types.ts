export interface Habit {
  id: string;
  name: string;
  progress: number;
}

export type HabitActionType = 'complete' | 'skip' | 'reset';

export interface HistoryEntry {
  id: string;
  habitId: string;
  habitName: string;
  action: HabitActionType;
  timestamp: string;
}
