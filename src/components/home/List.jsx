import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Section from '../shared/Section';
import { Feather } from '@expo/vector-icons';
import ListItem from '../shared/ListItem';

export default function List() {
  return (
    <Section style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Yapılacaklar Listesi</Text>
        <TouchableOpacity style={styles.addButton}>
          <Feather name="plus-circle" size={20} color="green" />
          <Text style={styles.addButtonText}>Task Ekle</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        <ListItem />

        <TouchableOpacity style={styles.viewGoalButton}>
          <Text style={[styles.viewGoalText, { color: 'blue' }]}>Hedefini Gör</Text>
        </TouchableOpacity>
      </View>
    </Section>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0', // Gri tonlarına güncellendi
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    color: 'black', // Rengi siyah olarak güncellendi
    fontWeight: 'bold',
    fontFamily: 'Roboto', // Yazı tipi eklendi
  },
  addButton: {
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'Roboto', // Yazı tipi eklendi
  },
  listContainer: {
    marginTop: 10,
  },
  viewGoalButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  viewGoalText: {
    textAlign: 'center',
    fontSize: 13,
    textDecorationLine: 'underline',
    fontFamily: 'Roboto', // Yazı tipi eklendi
  },
});
