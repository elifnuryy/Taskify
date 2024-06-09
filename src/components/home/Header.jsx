import { Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';

export default function Header() {
  const [notificationCount, setNotificationCount] = useState(1);

  const handleNotificationPress = () => {
    // Bildirimlerin açılmasını burada işleyebiliriz.
    Alert.alert('Bildirimler', 'Yeni bir bildiriminiz var!');
    // Bildirim sayısını sıfırla
    setNotificationCount(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <View style={styles.avatar}></View>
        <View>
          <Text style={styles.userName}>Hoşgeldin Elif</Text>
          <Text style={styles.userRole}>Üye</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleNotificationPress}>
        <View style={styles.notificationIcon}>
          <Feather name="bell" size={24} color="#343A40" />
          {notificationCount > 0 && (
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationText}>{notificationCount}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0', // Açık gri tonu
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: '#C4C4C4', // Örnek bir renk
    borderRadius: 25,
  },
  userName: {
    color: '#333',
    fontSize: 18, // Yazı boyutu büyültüldü
    fontWeight: 'bold',
    marginBottom: 3,
  },
  userRole: {
    color: '#666',
    fontSize: 14, // Yazı boyutu büyültüldü
    marginBottom: 5, // Alt boşluk eklendi
  },
  notificationIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20, // Daire şeklinde
  },
  notificationBadge: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: 16,
    height: 16,
    backgroundColor: '#ff3200',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  notificationText: {
    color: '#FFF',
    fontSize: 11, // Yazı boyutu büyültüldü
  },
});
