import { Pressable, StyleSheet } from 'react-native';

import ProgressBar from '@/components/ProgressBar';
import { Text, View } from '@/components/Themed';
import { useAppDispatch } from '@/store/hooks';
import { performHabitAction } from '@/store/thunks/habitActions';
import { Habit } from '@/store/types';

interface HabitCardProps {
  habit: Habit;
}

export default function HabitCard({ habit }: HabitCardProps) {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{habit.name}</Text>
      <ProgressBar progress={habit.progress} />
      <Text style={styles.progress}>{habit.progress}%</Text>
      <View style={styles.buttons}>
        <Pressable
          style={[styles.button, styles.completeButton]}
          onPress={() => dispatch(performHabitAction(habit.id, 'complete'))}>
          <Text style={styles.buttonText}>Выполнить</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.skipButton]}
          onPress={() => dispatch(performHabitAction(habit.id, 'skip'))}>
          <Text style={styles.buttonText}>Пропустить</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.resetButton]}
          onPress={() => dispatch(performHabitAction(habit.id, 'reset'))}>
          <Text style={styles.buttonText}>Сбросить</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  progress: {
    fontSize: 14,
    marginTop: 6,
    marginBottom: 12,
    opacity: 0.7,
  },
  buttons: {
    flexDirection: 'row',
    gap: 8,
    backgroundColor: 'transparent',
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  completeButton: {
    backgroundColor: '#4caf50',
  },
  skipButton: {
    backgroundColor: '#ff9800',
  },
  resetButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});
