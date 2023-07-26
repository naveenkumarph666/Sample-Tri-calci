import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Main from './Components/Main';
import Calculator from './Components/Calculator';
import { NavigationContainer } from '@react-navigation/native';
import Trigonometry from './Components/Trigonometry';
import RequireTri from './Components/RequireTri';


export default function App({navigation}) {
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Main'>
    <Stack.Screen name='Main' component={Main} options={{headerTitle:'Welcome To Calc!',headerTitleStyle:{fontSize:25}}}/>
    <Stack.Screen name='Calc' component={Calculator} options={{headerTitle:'Normal Calc!',headerTitleStyle:{fontSize:25},headerTitleAlign:'center'}} />
    <Stack.Screen name='Tri' component={Trigonometry} options={{headerTitle:'Trigonometry Calc!',headerTitleStyle:{fontSize:25},headerTitleAlign:'center'}}/>
    <Stack.Screen name='ReqTri' component={RequireTri} options={{headerTitle:'Calc!',headerTitleStyle:{fontSize:25},headerTitleAlign:'center'}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center',
  }
});
