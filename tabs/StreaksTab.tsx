import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function StreaksTab() {
  const [completedCount, setCompletedCount] = useState<number>(0);

  useEffect(() => {
    const fetchCompletedGoals = async () => {
      try {
        const storedGoals = await AsyncStorage.getItem('goals');
        if (storedGoals) {
          const goals = JSON.parse(storedGoals);
          const completed = goals.filter((goal: any) => goal.completed).length;
          setCompletedCount(completed);
        }
      } catch (error) {
        console.error('Error fetching completed goals:', error);
      }
    };

    fetchCompletedGoals();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Streaks</Text>
      <Text style={styles.text}>
        Goals Completed: {completedCount}
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
  },
});
