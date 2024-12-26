import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from '../../tabs/HomeTab';
import StreaksTab from '../../tabs/StreaksTab';
import GoalsTab from '../../tabs/GoalsTab';
import RemindersTab from '../../tabs/RemindersTab';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Streaks" component={StreaksTab} />
      <Tab.Screen name="Goals" component={GoalsTab} />
      <Tab.Screen name="Reminders" component={RemindersTab} />
    </Tab.Navigator>
  );
}
