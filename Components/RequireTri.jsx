import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function RequireTri({ route, navigation }) {
    const [length, setLength] = useState(0);
    const [breadth, setBreadth] = useState(0);
    const [height, setHeight] = useState(0);
    const [diameter, setDiameter] = useState(0);
    const [radius, setRadius] = useState(0);
    const [area, setArea] = useState(0);
    const [perimeter, setPerimeter] = useState(0);
    const [volume, setVolume] = useState(0);
    const { paraName } = route.params;
    const [items, setItems] = useState([
        { id: '1', item: 'Length', desc: '' },
        { id: '2', item: 'Breadth', desc: '' },
        { id: '3', item: 'Height', desc: '* Enter the value of height if it is necessary & slant height for triangle' },
        { id: '4', item: 'Diameter', desc: '* Enter the value of diameter if it is necessary' },
        { id: '5', item: 'Radius', desc: '* Enter the value of radius if it is necessary' }])

    const handleInputValue = (a, b) => {
        if (a === 'Length') {
            setLength(parseInt(b))
        }
        else if (a === 'Breadth') {
            setBreadth(parseInt(b))
        }
        else if (a === 'Height') {
            setHeight(parseInt(b))
        }
        else if (a === 'Diameter') {
            setDiameter(parseInt(b))
        }
        else if (a === 'Radius') {
            setRadius(parseInt(b));
        }
    }
    const handleFormula = () => {
        if (paraName === 'SQUARE') {
            setArea(length ** 2)
            setPerimeter(4 * length)
            setVolume(0)
        }
        else if (paraName === 'RECTANGLE') {
            setArea(length * breadth)
            setPerimeter(2 * (length + breadth))
            setVolume(0)
        }
        else if (paraName === 'TRIANGLE') {
            setArea((1 / 2) * length * breadth)
            setPerimeter(length + breadth + height)
            setVolume(0)
        }
        else if (paraName === 'PARALLELOGRAM') {
            setArea(length * breadth)
            setPerimeter(2 * (length + breadth))
            setVolume(0)
        }
        else if (paraName === 'CIRCLE') {
            if (diameter != 0) {
                setRadius(diameter / 2)
                setArea((3.14) * (radius ** 2))
                setPerimeter(2 * (3.14 * radius))
                setVolume(0)
            }
            else if (diameter === 0) {
                setArea((3.14) * (radius ** 2))
                setPerimeter(2 * (3.14 * radius))
                setVolume(0)
            }
        }
        else if (paraName === 'RHOMBUS') {
            setArea((1 / 2) * length * breadth)
            setPerimeter(4 * length)
            setVolume((1 / 2) * (length * breadth * height))
        }
        else if (paraName === 'SPHERE') {
            if (diameter != 0) {
                setRadius(diameter / 2)
                setArea(4 * (3.14) * (radius ** 2))
                setPerimeter(2 * (3.14) * radius)
                setVolume((4 / 3) * (3.14) * (radius ** 3))
            }
            else if (diameter === 0) {
                setArea(4 * (3.14) * (radius ** 2))
                setPerimeter(2 * (3.14) * radius)
                setVolume((4 / 3) * (3.14) * (radius ** 3))
            }
        }
        else if (paraName === 'HEMISPHERE') {
            if (diameter != 0) {
                setRadius(diameter / 2)
                setArea(2 * (3.14) * (radius ** 2))
                setPerimeter(0)
                setVolume((2 / 3) * (3.14) * (radius ** 3))
            }
            else if (diameter === 0) {
                setArea(2 * (3.14) * (radius ** 2))
                setPerimeter(0)
                setVolume((2 / 3) * (3.14) * (radius ** 3))
            }
        }
        else if (paraName === 'CYLINDER') {
            if (diameter != 0) {
                setRadius(diameter / 2)
                setArea(2 * (3.14) * radius * (radius + height))
                setPerimeter(2 * (diameter + height))
                setVolume((3.14) * (radius ** 2) * height)
            }
            else if (diameter === 0) {
                setArea(2 * (3.14) * radius * (radius + height))
                setPerimeter(2 * (diameter + height))
                setVolume((3.14) * (radius ** 2) * height)
            }
        }
        else if (paraName === 'CUBE') {
            setArea(6 * (length ** 2));
            setPerimeter(12 * length);
            setVolume(length ** 3);
        }
        else if (paraName === 'CUBOID') {
            setArea(2 * ((length * breadth) + (breadth * height) + (height * length)));
            setPerimeter(4 * (length * height * breadth));
            setVolume(length * breadth * height);
        }
        else if (paraName === 'CONE') {
            if (diameter != 0) {
                setRadius(diameter / 2);
                setArea((3.14 * (radius ** 2)) + (3.14 * radius * ((radius ** 2 + height ** 2) ** (1 / 2))));
                setPerimeter(2 * (3.14) * radius);
                setVolume((1 / 3) * (3.14) * (radius ** 2) * height);
            }
            else if (diameter === 0) {
                setArea((3.14 * (radius ** 2)) + (3.14 * radius * ((radius ** 2 + height ** 2) ** (1 / 2))));
                setPerimeter(2 * (3.14) * radius);
                setVolume((1 / 3) * (3.14) * (radius ** 2) * height);
            }
        }
    }
    const handleFields = () => {
        setArea(0);
        setPerimeter(0);
        setVolume(0);
    }
    return (
        <SafeAreaView style={Styles.MainView}>
            <ScrollView>
                <View>
                    <View style={Styles.HeaderTitleTop}>
                        <Text style={Styles.HeaderTitle}>Here We Calculate!</Text>
                    </View>
                    {items.map((data, key) =>
                        <View key={data.id}>
                            <View style={Styles.inputHeader}>
                                <Text style={Styles.inputlabel}>{data.item} </Text>
                                <TextInput placeholder={'Enter The ' + data.item + ' in cm'} style={Styles.input} keyboardType='numeric' onChangeText={(value) => handleInputValue(data.item, value)} />
                            </View>
                            <View style={Styles.smallTextHeader}>
                                <Text style={Styles.smallText}>{data.desc}</Text>
                            </View>
                        </View>)}
                    <View style={Styles.parameterHeader}>
                        <Text style={Styles.parameterText}>{paraName}</Text>
                        <View style={Styles.ButtonViews}>
                            <TouchableOpacity onPress={handleFormula}>
                                <Text style={Styles.EnterButton}>ENTER</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleFields}>
                                <Text style={Styles.ClearButton}>CLEAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={Styles.formHeader}>
                        <View style={Styles.formBox}>
                            <Text>Area in cm^2</Text>
                            <Text style={Styles.displayText}>
                                {area}
                            </Text>
                        </View>
                        <View style={Styles.formBox}>
                            <Text>Perimeter in cm^2</Text>
                            <Text style={Styles.displayText}>
                                {perimeter}
                            </Text>
                        </View>
                        <View style={Styles.formBox}>
                            <Text>Volume in cm^3</Text>
                            <Text style={Styles.displayText}>
                                {volume}
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>)
}
const Styles = StyleSheet.create({
    inputHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputlabel: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    input: {
        color: 'black',
        fontSize: 15,
        backgroundColor: 'white',
        height: 50,
        width: 200,
        margin: 5,
        padding: 3,
        borderStyle: 'solid',
        borderRadius: 5
    },
    smallText: {
        fontSize: 10
    },
    smallTextHeader: {
        alignItems: 'center',
        marginBottom: 10
    },
    formHeader: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 10,
        justifyContent: 'center',
        padding: 10
    },
    formBox: {
        height: 130,
        width: 130,
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'whitesmoke',
        alignItems: 'center',
        backgroundColor: '#fef8f2',
        margin: 20
    },
    parameterHeader: {
        alignItems: 'center',
        margin: 10
    },
    parameterText: {
        fontSize: 15,
        backgroundColor: 'black',
        color: 'white',
        padding: 10,
        margin: 5
    },
    displayText: {
        fontSize: 20,
        margin: 20,
        fontWeight: 'bold'
    },
    MainView: {
        flex: 1,
        backgroundColor: 'lightblue'
    },
    HeaderTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 20
    },
    HeaderTitleTop: {
        alignItems: 'center'
    },
    EnterButton: {
        fontSize: 15,
        backgroundColor: 'lightgreen',
        color: 'white',
        padding: 10,
        margin: 5,
        fontWeight: 'bold'
    },
    ClearButton: {
        fontSize: 15,
        backgroundColor: 'red',
        color: 'black',
        padding: 10,
        margin: 5,
        fontWeight: 'bold'
    },
    ButtonViews: {
        flexDirection: 'row',
        padding: 5
    }
})