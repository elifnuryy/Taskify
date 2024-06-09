import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import CompletedItem from './CompletedItem';

export default function Completed() {
  return (
    <View style={{ marginTop: 5, marginHorizontal: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ color: 'blue', fontSize: 16, fontWeight: 'bold' }}>Önceki Listelerim</Text>
        <TouchableOpacity>
          <Text style={{ textDecorationLine: 'underline', color: 'black', fontSize: 13 }}>Temizle</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ marginTop: 10, marginBottom: 5 }} horizontal showsHorizontalScrollIndicator={false}>
        <CompletedItem />
        <CompletedItem />
        <CompletedItem />
        <CompletedItem />
      </ScrollView>
    </View>
  );
}
