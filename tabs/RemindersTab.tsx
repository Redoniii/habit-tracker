import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';

export default function RemindersTab() {
    React.useEffect(() => {
        const requestPermissions = async () => {
          const { status } = await Notifications.requestPermissionsAsync();
          if (status !== "granted") {
            alert("Permission to send notifications is required!");
          }
        };
    
        requestPermissions();
      }, []);
    
      Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: false,
          shouldSetBadge: false,
        }),
      });
  const scheduleNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Reminder',
        body: "Don't forget to work on your goals today!",
      },
      trigger: { 
        hour: 16,
        minute: 0,
        //seconds: 13, 
        repeats: true, 
    } as Notifications.NotificationTriggerInput,
    });
    alert('Daily reminder set for 16:00 AM!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Reminders</Text>
      <Button title="Set Daily Reminder" onPress={scheduleNotification} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
  },
});
