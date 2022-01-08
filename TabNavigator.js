import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import task from "../screens/task";
import createlist from "../screens/createlist";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ()=>{
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'task') {
              iconName = focused
                ? 'book'
                : 'book-outline';
            } else if (route.name === 'createlist') {
              iconName = focused ? 'create' : 'create-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="task" component={task} />
        <Tab.Screen name="createlist" component={createlist} />
      </Tab.Navigator>
  );
}