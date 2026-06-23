import { FlatList, StyleSheet } from 'react-native';

import HabitCard from '@/components/HabitCard';
import { Text, View } from '@/components/Themed';
import { useAppSelector } from '@/store/hooks';

export default function HabitsScreen() {
  const habits = useAppSelector((state) => state.habits.items);

  return (
    <View style={styles.container}>
      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HabitCard habit={item} />}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.empty}>Нет привычек</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingVertical: 8,
  },
  empty: {
    textAlign: 'center',
    marginTop: 40,
    opacity: 0.5,
  },
});
