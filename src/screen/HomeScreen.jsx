import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import List from '../components/home/List';
import Header from '../components/home/Header';
export default function HomeScreen() {
    return (
        <SafeAreaView className='flex-1'>
            <Header />
            <List />
        </SafeAreaView>
    )
}