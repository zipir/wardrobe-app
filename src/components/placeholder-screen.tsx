import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

type Props = {
  title: string;
  description: string;
  milestone: string;
};

// M0 aşamasında henüz içi doldurulmamış ekranlar için ortak görünüm.
export function PlaceholderScreen({ title, description, milestone }: Props) {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="subtitle" style={styles.centered}>
          {title}
        </ThemedText>
        <ThemedText themeColor="textSecondary" style={styles.centered}>
          {description}
        </ThemedText>
        <ThemedView type="backgroundElement" style={styles.badge}>
          <ThemedText type="small">{milestone}</ThemedText>
        </ThemedView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    maxWidth: MaxContentWidth,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.three,
    paddingHorizontal: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.three,
  },
  centered: {
    textAlign: 'center',
  },
  badge: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderRadius: Spacing.four,
  },
});
