import {Text,View } from "react-native";
import React from "react";
import Register from "../components/auth/register";
export default function RegisterScreen({navigation}){
    return(
     <Register navigation={navigation}/>
    )
}