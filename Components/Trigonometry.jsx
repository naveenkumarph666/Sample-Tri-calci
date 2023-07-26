import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Trigonometry({ navigation }) {
    const [items, setItems] = useState([
        {
            id: '1',
            item: 'SQUARE',
            img: require('C:/Users/phnav/MyNativeApp/Images/Square.jpg')
        },
        {
            id: '2',
            item: 'RECTANGLE',
            img: require('C:/Users/phnav/MyNativeApp/Images/OIP.jpg')
        },
        {
            id: '3',
            item: 'TRIANGLE',
            img: require('C:/Users/phnav/MyNativeApp/Images/download.jpg')
        },
        {
            id: '4',
            item: 'PARALLELOGRAM',
            img: require('C:/Users/phnav/MyNativeApp/Images/OIP(1).jpg')
        },
        {
            id: '5',
            item: 'CIRCLE',
            img: require('C:/Users/phnav/MyNativeApp/Images/OIP(2).jpg')
        },
        {
            id: '6',
            item: 'RHOMBUS',
            img: require('C:/Users/phnav/MyNativeApp/Images/Rhombus.jpg')
        },
        {
            id: '7',
            item: 'SPHERE',
            img: require('C:/Users/phnav/MyNativeApp/Images/OIP(4).jpg')
        },
        {
            id: '8',
            item: 'HEMISPHERE',
            img: require('C:/Users/phnav/MyNativeApp/Images/download(1).jpg')
        },
        {
            id: '9',
            item: 'CYLINDER',
            img: require('C:/Users/phnav/MyNativeApp/Images/Cylinder.jpg')
        },
        {
            id: '10',
            item: 'CUBE',
            img: require('C:/Users/phnav/MyNativeApp/Images/Cube.jpg')
        },
        {
            id: '11',
            item: 'CUBOID',
            img: require('C:/Users/phnav/MyNativeApp/Images/Cuboid.jpg')
        },
        {
            id: '12',
            item: 'CONE',
            img: require('C:/Users/phnav/MyNativeApp/Images/Cone.jpg')
        }])
    return (<SafeAreaView style={Styles.MainView}>
        <View>
            <ScrollView>
                <View style={Styles.DisplayView}>
                    {
                    items.map((data, key) => 
                    <TouchableOpacity onPress={() => navigation.navigate('ReqTri', { paraName: data.item })} style={Styles.Display}>
                        <View key={data.id}>
                            <Text style={Styles.DisplayText}>{data.item}</Text>
                            <Image source={data.img} style={Styles.DisplayImage} />
                        </View>
                    </TouchableOpacity>)}
                </View>
            </ScrollView>
        </View>
    </SafeAreaView>)
}

const Styles = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: 'lightblue'
    },
    DisplayView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    Display: {
        borderWidth: 5,
        borderColor: 'whitesmoke',
        margin: 15,
        padding: 1,
        borderRadius: 10,
        backgroundColor: '#fef8f2',
        height: 150,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    DisplayText: {
        fontSize: 15,
        color: 'black'
    },
    DisplayImage: {
        height: 50,
        width: 50,
        alignSelf: 'center'
    }
})