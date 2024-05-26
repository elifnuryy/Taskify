import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

export default function Header() {
  return (
    <View className='bg-white flex-row justify-between p-[10px] items-center'>
      <View className='flex-row gap-[7px] items-center'>
        <View>

        </View>
        <View>
            <Text className='text-primary font-medium mb-[3px]'>Hoşgeldiniz</Text>
            <Text className='text-secondary'>Üye</Text>
        </View>
      </View>
      <TouchableOpacity>
        <View className='relative w-[36px] h-[36px] bg-[#F8F9FA] justify-center items-center rounded-full'>
            <Feather name="bell" size={20} color="#343A40" />
            <view className='absolute right-1 top-1 bg-[#ff3200] justify-center items-center rounded-full w-[13px] h-[13px] '>
                <Text className='text-white'>1</Text>
            </view>
        </View>
      </TouchableOpacity>
    </View>
  )
}