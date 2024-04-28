import {View,Image,Text,TouchableOpacity,FlatList} from 'react-native';
import React from 'react';
import Input from '../shared/input'
import Button from '../shared/Button';
import { loginForm } from '../../utils/const/authForm';

export default function Login({navigation}){
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
            data={loginForm}
            renderItem={({item}) => {
                <View className='bg-blue-500  mt-5 w-full'>
                <Input title={item.title} icon={item.icon} isSecure= {item.isSecure}/>
                </View>
            }}
            keyExtractor={item => item.id}
        />
        </View>
            
                <View className='bg-blue-500 mt-5 w-full'>
            <Button title={'Giriş Yap'}/>
            </View>
            <View className='w-full mt-5 flex-row'>
                <Text className='text-primary'>Hala bir hesabınız yok mu?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text className='font-[600] m1-[7px] text-primary underline'>Kayıt olun</Text>
                </TouchableOpacity>
            </View>
    </View>
    )
}