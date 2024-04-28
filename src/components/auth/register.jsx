import { Text,View, TouchableOpacity,FlatList,Image } from "react-native";
import React from "react";
import Input from '../shared/input';
import Button from '../shared/Button';
import { registerForm } from '../../utils/const/authForm';

export default function Register({navigation}){
    return(
        <View style='bg-white flex-1 items-center justify-center px-5'>
        <View>
            <Image 
                source={require('../../..assets/images/auth-logo.png')}
            />
        </View>
        
        <View className='mt-5 w-full'>
            <Input title={'E-mail Adresi'}/>

        </View>
        
    <View className = 'w-full'>
    <FlatList
        data={registerForm}
        renderItem={({item}) => {
            <View className='bg-blue-500  mt-5 w-full'>
            <Input title={item.title} icon={item.icon}/>
            </View>
        }}
        keyExtractor={item => item.id}
    />
    </View>
        
            <View className='bg-blue-500 mt-5 w-full'>
        <Button title={'Kayıt Ol'}/>
        </View>
        <View className='w-full mt-5 flex-row'>
            <Text className='text-primary'>Yoksa bir hesabınız mı var?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text className='font-[600] m1-[7px] text-primary underline'>Giriş yap</Text>
            </TouchableOpacity>
        </View>
</View>
)
}
   

