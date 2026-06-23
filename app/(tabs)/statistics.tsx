import { FlatList, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useAppSelector } from '@/store/hooks';
import { HabitActionType } from '@/store/types';

const ACTION_LABELS: Record<HabitActionType, string> = {
  complete: 'Выполнено',
  skip: 'Пропущено',
  reset: 'Сброшено',
};

function formatDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function StatisticsScreen() {
  const entries = useAppSelector((state) => state.history.entries);
  const totalCompletions = entries.filter((e) => e.action === 'complete').length;

  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <Text style={styles.summaryLabel}>Всего выполнений</Text>
        <Text style={styles.summaryValue}>{totalCompletions}</Text>
      </View>

      <Text style={styles.sectionTitle}>История действий</Text>

      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.empty}>Пока нет записей</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.entry}>
            <View style={styles.entryHeader}>
              <Text style={styles.entryName}>{item.habitName}</Text>
              <Text style={styles.entryAction}>
                {ACTION_LABELS[item.action]}
              </Text>
            </View>
            <Text style={styles.entryDate}>{formatDate(item.timestamp)}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  summary: {
    margin: 16,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  summaryLabel: {
    fontSize: 16,
    opacity: 0.7,
    marginBottom: 8,
  },
  summaryValue: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  entry: {
    padding: 14,
    marginBottom: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: 'transparent',
  },
  entryName: {
    fontSize: 16,
    fontWeight: '500',
  },
  entryAction: {
    fontSize: 14,
    opacity: 0.7,
  },
  entryDate: {
    fontSize: 12,
    opacity: 0.5,
  },
  empty: {
    textAlign: 'center',
    marginTop: 20,
    opacity: 0.5,
  },
});
