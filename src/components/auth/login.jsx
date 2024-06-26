import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useReducer } from 'react';
import Input from '../shared/input'
import Button from '../shared/Button';
import { loginForm } from '../../utils/const/authForm';
import { setLoader } from '../../redux/generalSlice';
import { useDispatch } from 'react-redux';
import { inputReducer } from '../../reducer/inputReducer';
import { loginWithEmailAndPassword } from '../../auth';

export default function Login({ navigation }) {
    const reduxdispatch = useDispatch();

    const initialState = {
        email: '',
        password: '',
    }
    const [state, dispatch] = useReducer(inputReducer, initialState);

    const loginApp = () => {
        reduxDispatch(setLoader());
        const userData = loginWithEmailAndPassword(state.email, state.password);
        console.log("User Data: ", userData);
    }

    return (
        <View style='bg-white flex-1 items-center justify-center px-5'>
            <View>
                <Image
                    source={require('../../../assets/images/auth-logo.png')}
                />
            </View>

            <View className='mt-5 w-full'>
                <Input title={'E-mail Adresi'} />

            </View>

            <View className='w-full'>
                <FlatList
                    data={loginForm}
                    renderItem={({ item }) => {
                        <View className=' mt-5 w-full'>
                            <Input item={item} />
                        </View>
                    }}
                    keyExtractor={item => item.id}
                />
            </View>

            <TouchableOpacity onPress={loginApp} className='w-full mt-5'>
                <Button title={'Giriş Yap'} />
            </TouchableOpacity>

            <View className='w-full mt-5 flex-row'>
                <Text className='text-primary'>Hala bir hesabınız yok mu?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text className='font-[600] m1-[7px] text-primary underline'>Kayıt olun</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}