import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

export default function ListItem() {
  const [isChecked, setChecked] = useState(false);
  const handleCheckbox = () => setChecked(!isChecked)

  return (
    <TouchableOpacity onPress={handleCheckbox} className={'bg-white rounded-[6px] px-[10px] py-[8px] flex-row jutify-between items-center mt-[10px]'}>
      <View className='flex-row gap-5 items-center'>
        <View>
          <MaterialIcons name="directions-run" size={24} color="#3B5BDB" />
        </View>
        <View>
          <Text className='text-primary text-[13px]'>Sabah Sporu</Text>
          <Text className={'mt-[3px] text-secondary text-[11px] //üstünü çizme '}>Sabah 08.00'da yürüyüş yapılacak</Text>
        </View>
      </View>
      <View>
        <Checkbox
          className='rounded-[6px]'
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked && '#4630EB'}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})