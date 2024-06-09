import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function CompletedScreen() {
  const handleTaskPress = (taskName) => {
    alert(`"${taskName}" başarıyla tamamlandı!`);
  };

  const getRandomGrayColor = () => {
    const shades = ['#f2f2f2', '#e5e5e5', '#d8d8d8', '#cbcbcb', '#bebebe', '#b1b1b1'];
    return shades[Math.floor(Math.random() * shades.length)];
  };

  const getRandomGreenColor = () => {
    const shades = ['#2ecc71', '#27ae60', '#1abc9c', '#16a085', '#2ecc71', '#27ae60'];
    return shades[Math.floor(Math.random() * shades.length)];
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <FontAwesome5 name="tasks" size={20} color="#2ecc71" style={styles.headerIcon} />
          <Text style={styles.title}>Tamamlanan Görevler</Text>
        </View>
        <TouchableOpacity
          style={[styles.taskItem, { backgroundColor: getRandomGrayColor() }]}
          onPress={() => handleTaskPress('Kuaföre Git')}
        >
          <Text style={styles.taskText}>Kuaföre Git</Text>
          <FontAwesome5 name="check-circle" size={20} color={getRandomGreenColor()} style={styles.taskIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.taskItem, { backgroundColor: getRandomGrayColor() }]}
          onPress={() => handleTaskPress('KPSS Çalış')}
        >
          <Text style={styles.taskText}>KPSS Çalış</Text>
          <FontAwesome5 name="check-circle" size={20} color={getRandomGreenColor()} style={styles.taskIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.taskItem, { backgroundColor: getRandomGrayColor() }]}
          onPress={() => handleTaskPress('Market Alışverişi')}
        >
          <Text style={styles.taskText}>Market Alışverişi</Text>
          <FontAwesome5 name="check-circle" size={20} color={getRandomGreenColor()} style={styles.taskIcon} />
        </TouchableOpacity>
        {/* Diğer tamamlanmış görevler buraya eklenebilir */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 5,
  },
  headerIcon: {
    marginRight: 5,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  taskText: {
    fontSize: 18,
    color: '#333',
    marginRight: 10,
    fontFamily: 'Arial',
  },
  taskIcon: {},
});
