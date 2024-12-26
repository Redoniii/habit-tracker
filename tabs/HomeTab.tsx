import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Habit Tracker App</Text>
      <Text style={styles.text}>
        Keep track of your habits and stay motivated!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
  },
});
