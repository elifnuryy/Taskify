import {TextInput } from "react-native";
import React from "react";
import {StyleSheet, Text, View, Image} from 'react-native';
import Login from "../components/auth/login";

export default function LoginScreen({navigation}){
    return(
          <Login navigation={navigation} />
        <View style={styles.container}>
            <View>
                <Image 
                    source={require('../../assets/images/auth-logo.png')}
      />    
             </View> 
             <View className='bg-blue-500 w-full border-border bg-white'>
                <TextInput className='w-full px-[45px]'/>
             </View>
        </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
      marginTop:230,
      alignItems:'center',
    },
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
  });