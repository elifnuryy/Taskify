import { Text,View } from 'react-native'
import React from 'react'
import{   SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '@react-navigation/stack';
export default function HomeScreen() {
    return(
        <SafeAreaView className='flex-1'>
        <Header />
        <List />
       </SafeAreaView>
    )
}