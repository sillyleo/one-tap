import { ScrollView, Text, View } from 'react-native';
import { StyleSheet, UnistylesRuntime, useUnistyles } from 'react-native-unistyles';

export default function ExploreScreen() {
  const { theme } = useUnistyles();

  // Note: Manual theme switching is disabled when adaptiveThemes is enabled
  // The theme automatically follows the system appearance

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Unistyles Features</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Theme System</Text>
        <Text style={styles.description}>
          Current theme: {UnistylesRuntime.themeName}
        </Text>
        <Text style={styles.description}>
          Adaptive themes: {UnistylesRuntime.hasAdaptiveThemes ? 'Enabled' : 'Disabled'}
        </Text>
        <View style={[styles.button, { opacity: 0.6 }]}>
          <Text style={styles.buttonText}>Theme follows system setting</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Accent Colors</Text>
        <View style={styles.colorRow}>
          {Object.entries(theme.colors.accents).map(([name, color]) => (
            <View key={name} style={styles.colorItem}>
              <View style={[styles.colorSwatch, { backgroundColor: color }]} />
              <Text style={styles.colorName}>{name}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Responsive Design</Text>
        <Text style={styles.description}>
          Screen width: {UnistylesRuntime.screen.width}px
        </Text>
        <Text style={styles.description}>
          Current breakpoint: {UnistylesRuntime.breakpoint}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.gap(2),
    paddingTop: rt.insets.top + theme.gap(2),
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.typography,
    marginBottom: theme.gap(3),
    textAlign: 'center',
  },
  section: {
    marginBottom: theme.gap(3),
    padding: theme.gap(2),
    backgroundColor: theme.colors.foreground,
    borderRadius: theme.gap(1),
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: theme.colors.typography,
    marginBottom: theme.gap(1),
  },
  description: {
    fontSize: 16,
    color: theme.colors.dimmed,
    marginBottom: theme.gap(1),
  },
  button: {
    backgroundColor: theme.colors.tint,
    padding: theme.gap(1.5),
    borderRadius: theme.gap(1),
    alignItems: 'center',
    marginTop: theme.gap(1),
  },
  buttonText: {
    color: theme.colors.background,
    fontWeight: '600',
  },
  colorRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.gap(1),
  },
  colorItem: {
    alignItems: 'center',
    minWidth: 60,
  },
  colorSwatch: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: theme.gap(0.5),
  },
  colorName: {
    fontSize: 12,
    color: theme.colors.dimmed,
    textAlign: 'center',
  },
}));
