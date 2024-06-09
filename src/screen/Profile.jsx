import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function Profile() {
  const [isImageUploaded, setImageUploaded] = useState(false);

  const handleImageUpload = () => {
    
    alert('Lütfen fotoğraf seçiniz!');
    setImageUploaded(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profileImageContainer} onPress={handleImageUpload}>
        <View style={styles.profileImageBorder}>
          <FontAwesome5 name="user-circle" size={80} color="#333" style={styles.profileIcon} />
        </View>
        {!isImageUploaded && (
          <FontAwesome5 name="plus-circle" size={24} color="#2ecc71" style={styles.addIcon} />
        )}
      </TouchableOpacity>
      <Text style={styles.name}>Elifnur Yüksel</Text>
      <Text style={styles.bio}>Software Engineer</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Yaş: 22</Text>
        <Text style={styles.info}>Konum: Elazığ, Türkiye</Text>
        <Text style={styles.info}>E-posta: elifnur@example.com</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Düzenle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ayarlar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  profileImageBorder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#2ecc71',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  profileIcon: {},
  addIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 3,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  bio: {
    fontSize: 18,
    marginBottom: 20,
    color: '#555',
  },
  infoContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
    color: '#777',
    textShadowColor: '#ccc',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: '#2ecc71',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
