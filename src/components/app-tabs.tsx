import { NativeTabs } from 'expo-router/native-tabs';
import { useColorScheme } from 'react-native';

import { Colors } from '@/constants/theme';

// Ana sekmeler: Bugün (kombin önerisi), Gardırop (envanter), Profil (ayarlar).
// İkonlar iOS'un yerleşik SF Symbols setinden geliyor; Android ikonları V2'de eklenecek.
export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'dark' ? 'dark' : 'light'];

  return (
    <NativeTabs
      backgroundColor={colors.background}
      indicatorColor={colors.backgroundElement}
      labelStyle={{ selected: { color: colors.text } }}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Bugün</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: 'sun.max', selected: 'sun.max.fill' }} />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="wardrobe">
        <NativeTabs.Trigger.Label>Gardırop</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: 'hanger', selected: 'hanger' }} />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label>Profil</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: 'person', selected: 'person.fill' }} />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
