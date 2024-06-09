import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function TaskScreen() {
  const tasks = [
    "Sabah sporu",
    "Kpss Çalış",
    "Kuaföre Git",
    "Market Alışverişi"
  ];

  const getTaskColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 30%, 80%)`; 
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.titleContainer}>
          <FontAwesome5 name="clipboard-list" size={28} color="#333" style={styles.icon} />
          <Text style={styles.titleText}>Mevcut Görevlerim</Text>
        </View>
        {tasks.map((task, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.taskItem, { backgroundColor: getTaskColor() }]}
            onPress={() => {}}
            activeOpacity={0.6}
          >
            <FontAwesome5 name="trash" size={24} color="#333" style={styles.taskIcon} />
            <Text style={styles.taskText}>{task}</Text>
            <FontAwesome5 name="check-square" size={24} color="#333" style={styles.taskCheckIcon} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 400, 
    padding: 20,
    backgroundColor: '#ddd', 
    borderRadius: 10, 
    marginBottom: 10,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3, 
    elevation: 5, 
  },
  taskIcon: {},
  taskText: {
    fontSize: 18,
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  taskCheckIcon: {},
});
