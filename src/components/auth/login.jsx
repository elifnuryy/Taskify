import {Text,View,Image} from 'react-native';
import React from 'react';


export default function login(){
    return(
        <View className= 'bg-white-500 flex-1 items-center justify-center px-5'>
            <View>
            <Image 
                source={require('../../../assets/images/auth-logo.png')}
      />
             </View> 
             <View className='bg-blue-500 w-full'>
                <Input />
             </View>
        </View>
    )
}