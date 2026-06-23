import { StyleSheet, View } from 'react-native';

import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const fillColor = Colors[colorScheme].tint;

  return (
    <View style={[styles.track, colorScheme === 'dark' && styles.trackDark]}>
      <View
        style={[
          styles.fill,
          { width: `${progress}%`, backgroundColor: fillColor },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
    overflow: 'hidden',
  },
  trackDark: {
    backgroundColor: '#333',
  },
  fill: {
    height: '100%',
    borderRadius: 5,
  },
});
