import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import List from '../components/home/List';
import Header from '../components/home/Header';
import PremiumBanner from '../components/shared/PremiumBanner';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Header />
                <List />
                <PremiumBanner />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FFFA	',
    },
    content: {
        flex: 1,
        paddingTop: 20, 
    },
});
