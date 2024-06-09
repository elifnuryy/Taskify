import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function PremiumBanner({ onPress }) {
  const [isHovered, setIsHovered] = useState(false);

  const handlePress = () => {
    
    alert('Premium özelliklere ulaşmak için uygulamamızı yükseltin!');
  };

  return (
    <TouchableOpacity
      style={[styles.container, isHovered && styles.hovered]}
      onPress={onPress}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Text style={styles.text}>🌟 Premium İçerik 🌟</Text>
      <Text style={styles.subtext}>Özel özellikler için şimdi yükseltin!</Text>
      <Text style={[styles.freeTrial, isHovered && styles.freeTrialHovered]} onPress={handlePress}>
        7 GÜN BOYUNCA ÜCRETSİZ
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFD700', 
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  text: {
    color: '#333', 
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtext: {
    color: '#555', 
    fontSize: 18,
    marginBottom: 12,
  },
  freeTrial: {
    color: '#009688', 
    fontSize: 16,
    fontStyle: 'italic',
    textDecorationLine: 'underline', 
  },
  hovered: {
    backgroundColor: '#FFA500', 
  },
  freeTrialHovered: {
    color: '#FFD700', 
  },
});
