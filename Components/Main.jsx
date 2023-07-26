import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Main({ navigation }) {

  const [options, setOptions] = useState([
    {
      id: '1',
      name: 'CALCULATOR',
      desc: 'Use For Normal Calculations',
      loc: 'Calc',
      img:require('C:/Users/phnav/MyNativeApp/Images/sample_calci.jpg')
    },
    {
      id: '2',
      name: 'TRIGONOMETRY',
      desc: 'Use For Trigonometrical Calculations',
      loc: 'Tri',
      img:require('C:/Users/phnav/MyNativeApp/Images/TRI_Calci.jpeg')
    }
  ])

  return (
    <SafeAreaView style={styles.MainView}>
      <View style={styles.HeaderView}>
      <Text style={styles.Header}>YOUR CALC!</Text>
      </View>
      <View style={styles.container}>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          {
            options.map((data, key) =>
              <TouchableOpacity style={{ padding: 15 }} onPress={() => navigation.navigate(data.loc)}>
                <View key={data.id} >
                  <Text style={styles.option}>{data.name}<Image source={data.img} style={{height:50,width:50}}/></Text>
                  <Text style={styles.text}>* {data.desc}</Text>
                </View>
              </TouchableOpacity>
            )
          }
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63C5DA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Header: {
    color: 'white',
    fontWeight: 'bold',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    fontSize: 40,
    backgroundColor: 'red'
  },
  option: {
    backgroundColor: '#fef8f2',
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
    paddingTop:10,
    padding:5,
    height:150,
    width:150,
    textAlign: 'center',
    borderRadius: 10
  },
  text: {
    fontSize: 10,
    fontWeight: 'normal',
    color:'black'
  },
  MainView: {
    flex: 1
  },
  HeaderView:{
    backgroundColor:'#0492c2',
    height:370,
    width:'auto',
    borderStyle:'solid',
    borderWidth:2,
    justifyContent:'center',
    alignItems:'center'}
});
