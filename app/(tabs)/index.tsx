import { Text, View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

export default function HomeScreen() {
  const { theme } = useUnistyles();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to One-Tap!</Text>
      <Text style={styles.subtitle}>React Native Unistyles is working! 🎉</Text>
      <View style={styles.colorBox} />
      <Text style={styles.description}>
        Current theme: {theme.colors.background}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    paddingTop: rt.insets.top,
    gap: theme.gap(2),
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.typography,
  },
  subtitle: {
    fontSize: 18,
    color: theme.colors.tint,
  },
  colorBox: {
    width: 100,
    height: 100,
    backgroundColor: theme.colors.accents.banana,
    borderRadius: theme.gap(1),
  },
  description: {
    fontSize: 14,
    color: theme.colors.dimmed,
    textAlign: 'center',
  },
}));
