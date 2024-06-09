import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'; 

export default function AddTaskScreen() {
  const navigation = useNavigation(); 
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddTask = () => {
   
    navigation.navigate('TaskScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Görev Ekle</Text>
      <View style={styles.inputContainer}>
        <AntDesign name="profile" size={24} color="#2ecc71" style={styles.icon} />
        {/* Icon eklendi */}
        <TextInput
          style={styles.input}
          placeholder="Görev adını girin"
          placeholderTextColor="#A0AEC0"
          value={taskName}
          onChangeText={text => setTaskName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <AntDesign name="filetext1" size={24} color="#2ecc71" style={styles.icon} />
        {/* Icon eklendi */}
        <TextInput
          style={styles.input}
          placeholder="Açıklama girin"
          placeholderTextColor="#A0AEC0"
          value={taskDescription}
          onChangeText={text => setTaskDescription(text)}
        />
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonLabel}>Ekle</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'red', 
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#CED6E0',
    borderRadius: 6,
    paddingHorizontal: 10,
    color: '#2F3542',
  },
  icon: {
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#2ecc71', 
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 50,
    alignItems: 'center',
  },
  addButtonLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
