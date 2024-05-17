import { Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, Profile, AddTaskScreen, CompletedScreen, TaskScreen } from '../screen';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false}}>
      
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{
        tabBarLabel: ({focused}) => (
          focused
          ?
          <Text className='text-[11px] text-main font-medium'> Ana Sayfa</Text>
          :
          <Text className='text-[11px] text-secondary'> Ana Sayfa</Text>
        ),
        tabBarIcon: ({focused}) => (
          focused
          ?
          <AntDesign name="home" size={20} color="#3B5BDB" />
          :
          <AntDesign name="home" size={20} color="#868E96" />
        ),

      }}
      
      />
      <Tab.Screen name="Task" component={TaskScreen} 
      options={{
        tabBarLabel: ({focused}) => (
          focused
          ?
          <Text className='text-[11px] text-main font-medium'> Ana Sayfa</Text>
          :
          <Text className='text-[11px] text-secondary'> Ana Sayfa</Text>
        ),
        tabBarIcon: ({focused}) => (
          focused
          ?
          <AntDesign name="home" size={20} color="#3B5BDB" />
          :
          <AntDesign name="home" size={20} color="#868E96" />
        ),

      }}
      />
      <Tab.Screen name="AddTask" component={AddTaskScreen} />
      <Tab.Screen name="Completed" component={CompletedScreen} />
      <Tab.Screen name="Profile" component={Profile} />
  
    </Tab.Navigator>
    </NavigationContainer>
  )
}






 