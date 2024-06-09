import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, Profile, AddTaskScreen, CompletedScreen, TaskScreen } from '../screen';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBarOptions={{
          activeTintColor: '#3B5BDB',
          inactiveTintColor: '#868E96',
          labelStyle: {
            fontSize: 11,
            fontWeight: 'bold',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Ana Sayfa',
            tabBarIcon: ({ focused }) => (
              <AntDesign name="home" size={20} color={focused ? '#3B5BDB' : '#868E96'} />
            ),
          }}
        />
        <Tab.Screen
          name="Task"
          component={TaskScreen}
          options={{
            tabBarLabel: 'Tasklarım',
            tabBarIcon: ({ focused }) => (
              <AntDesign name="profile" size={20} color={focused ? '#3B5BDB' : '#868E96'} />
            ),
          }}
        />
        <Tab.Screen
          name="AddTask"
          component={AddTaskScreen}
          options={{
            tabBarLabel: 'Task Ekle',
            tabBarIcon: () => <Entypo name="squared-plus" size={28} color="#3B5BDB" />,
          }}
        />
        <Tab.Screen
          name="Completed"
          component={CompletedScreen}
          options={{
            tabBarLabel: 'Tamamlanan',
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="playlist-add-check"
                size={28}
                color={focused ? '#3B5BDB' : '#868E96'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profil',
            tabBarIcon: ({ focused }) => (
              <MaterialIcons name="person" size={20} color={focused ? '#3B5BDB' : '#868E96'} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
