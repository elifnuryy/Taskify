import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

export default function ListItem() {
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);

  const handleCheckbox1 = () => setChecked1(!isChecked1);
  const handleCheckbox2 = () => setChecked2(!isChecked2);
  const handleCheckbox3 = () => setChecked3(!isChecked3);
  const handleCheckbox4 = () => setChecked4(!isChecked4);

  return (
    <View>
      <TouchableOpacity onPress={handleCheckbox1} style={[styles.container, isChecked1 && styles.checkedContainer]}>
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="directions-run" size={24} color="black" />
          </View>
          <View style={styles.textContainer}>
            <Text numberOfLines={1} style={[styles.title, {color: isChecked1 ? '#7BC74D' : '#FFA000'}]}>Sabah Sporu</Text>
            <Text numberOfLines={1} style={[styles.description, isChecked1 && styles.strikeThrough]}>Sabah 08.00'da yürüyüş yapılacak</Text>
          </View>
        </View>
        <Checkbox
          style={styles.checkbox}
          value={isChecked1}
          onValueChange={setChecked1}
          color={isChecked1 ? '#3B5B' : '#cfcfcf'}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCheckbox2} style={[styles.container, isChecked2 && styles.checkedContainer]}>
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="directions-run" size={24} color="black" />
          </View>
          <View style={styles.textContainer}>
            <Text numberOfLines={1} style={[styles.title, {color: isChecked2 ? '#FF7F00' : '#1E88E5'}]}>Kpss Çalış</Text>
            <Text numberOfLines={1} style={[styles.description, isChecked2 && styles.strikeThrough]}>25 tane paragraf çöz</Text>
          </View>
        </View>
        <Checkbox
          style={styles.checkbox}
          value={isChecked2}
          onValueChange={setChecked2}
          color={isChecked2 ? '#3B5B' : '#cfcfcf'}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCheckbox3} style={[styles.container, isChecked3 && styles.checkedContainer]}>
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="directions-run" size={24} color="black" />
          </View>
          <View style={styles.textContainer}>
            <Text numberOfLines={1} style={[styles.title, {color: isChecked3 ? '#FF5555' : '#3F51B5'}]}>Kuaföre Git</Text>
            <Text numberOfLines={1} style={[styles.description, isChecked3 && styles.strikeThrough]}>Saçlarına cila yaptır</Text>
          </View>
        </View>
        <Checkbox
          style={styles.checkbox}
          value={isChecked3}
          onValueChange={setChecked3}
          color={isChecked3 ? '#3B5B' : '#cfcfcf'}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCheckbox4} style={[styles.container, isChecked4 && styles.checkedContainer]}>
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="directions-run" size={24} color="black" />
          </View>
          <View style={styles.textContainer}>
            <Text numberOfLines={1} style={[styles.title, {color: isChecked4 ? '#795548' : '#FBC02D'}]}>Market Alışverişi</Text>
            <Text numberOfLines={1} style={[styles.description, isChecked4 && styles.strikeThrough]}>Süt,Çilek,Domates Al</Text>
          </View>
        </View>
        <Checkbox
          style={styles.checkbox}
          value={isChecked4}
          onValueChange={setChecked4}
          color={isChecked4 ? '#3B5B' : '#cfcfcf'}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    elevation: 2, // Gölgelendirme eklendi
  },
  checkedContainer: {
    backgroundColor: '#D3D3D3', // Tıklanan öğelerin arka plan rengi gri olacak
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    maxWidth: '80%',
    marginBottom: 4, // Metinler arasına boşluk eklendi
  },
  description: {
    color: '#343A40',
    fontSize: 14,
    maxWidth: '80%',
  },
  strikeThrough: {
    textDecorationLine: 'line-through',
  },
  checkbox: {
    borderRadius: 3,
  },
});
