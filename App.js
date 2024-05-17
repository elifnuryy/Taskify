import React from 'react'
import NavigationStack from './src/navigation'
import 'react-native-gesture-handler';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';


export default function App(){
    return(
        <Provider store={store}>
         < NavigationStack/>
        </Provider>
     
    )
}