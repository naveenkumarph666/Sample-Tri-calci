import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

export default function Calculator({ navigation }) {
    const [def, setDef] = useState('');
    const [value, setValue] = useState('');
    const [Nums, setNums] = useState([
        { id: '1', name: '1' },
        { id: '2', name: '2' },
        { id: '3', name: '3' },
        { id: '4', name: '4' },
        { id: '5', name: '5' },
        { id: '6', name: '6' },
        { id: '7', name: '7' },
        { id: '8', name: '8' },
        { id: '9', name: '9' },
        { id: '0', name: '0' }
    ])
    const [symbols, setSymbols] = useState([
        { id: '1', sym: '*' },
        { id: '2', sym: '+' },
        { id: '3', sym: '-' },
        { id: '4', sym: '/' },
        { id: '5', sym: '%' },
        { id: '6', sym: '=' },
        { id: '7', sym: '.' },
        { id: '8', sym: 'X' }])
    const handleScreen = (a) => {
        if (a != 'X' && a != '=') {
            setDef(def + a);
            setValue(a);
        }
        else if (a === 'X') {
            var result = def.slice(0, def.length - 1);
            setDef(result);
        }
        else if (a === '=') {
            for (let i = 0; i < def.length; i++) {
                if (def[i] === '+') {
                    for (let j = 0; j < def.length; j++) {
                        if (def[j] != '.') {
                            let val1 = parseInt(def.slice(0, i));
                            let val2 = parseInt(def.slice(i + 1));
                            var res = val1 + val2;
                            setDef(res.toString());
                        }
                        else if (def[j] === '.') {
                            let val1 = parseFloat(def.slice(0, i));
                            let val2 = parseFloat(def.slice(i + 1));
                            var res = val1
                            setDef(res.toString());
                        }
                    }
                }
                else if (def[i] === '-') {
                    for (let j = 0; j < def.length; j++) {
                        if (def[j] != '.') {
                            let val1 = parseInt(def.slice(0, i));
                            let val2 = parseInt(def.slice(i + 1));
                            let res = val1 - val2
                            setDef(res.toString());
                        }
                        else if (def[j] === '.') {
                            let val1 = parseFloat(def.slice(0, i));
                            let val2 = parseFloat(def.slice(i + 1));
                            var res = val1 - val2;
                            setDef(res.toString());
                        }
                    }
                }
                else if (def[i] === '*') {
                    for (let j = 0; j < def.length; j++) {
                        if (def[j] != '.') {
                            let val1 = parseInt(def.slice(0, i));
                            let val2 = parseInt(def.slice(i + 1));
                            var res = val1 * val2;
                            setDef(res.toString());
                        }
                        else if (def[j] === '.') {
                            let val1 = parseFloat(def.slice(0, i));
                            let val2 = parseFloat(def.slice(i + 1));
                            var res = val1 * val2;
                            setDef(res.toString());
                        }
                    }
                }
                else if (def[i] === '/') {
                    for (let j = 0; j < def.length; j++) {
                        if (def[j] != '.') {
                            let val1 = parseInt(def.slice(0, i));
                            let val2 = parseInt(def.slice(i + 1));
                            var res = val1 / val2;
                            setDef(res.toString());
                        }
                        else if (def[j] === '.') {
                            let val1 = parseFloat(def.slice(0, i));
                            let val2 = parseFloat(def.slice(i + 1));
                            var res = val1 / val2;
                            setDef(res.toString());
                        }
                    }
                }
                else if (def[i] === '%') {
                    for (let j = 0; j < def.length; j++) {
                        if (def[j] != '.') {
                            let val1 = parseInt(def.slice(0, i));
                            let val2 = parseInt(def.slice(i + 1));
                            var res = val1 % val2;
                            setDef(res.toString());
                        }
                        else if (def[j] === '.') {
                            let val1 = parseFloat(def.slice(0, i));
                            let val2 = parseFloat(def.slice(i + 1));
                            var res = val1 + val2;
                            setDef(res.toString());
                        }
                    }
                }

            }

        }
    }

    const handleClear = () => {
        setDef('');
    }
    return (

        <View style={Styles.MainView}>
            <View><Text style={Styles.DisplayValue}>{def}</Text></View>
            <View style={Styles.TotalButtonView}>
                <TouchableOpacity onPress={handleClear}>
                    <Text style={Styles.Clear}>CLEAR</Text>
                </TouchableOpacity>
                {Nums.map((data, key) =>
                    <View key={data.id}>
                        <TouchableOpacity onPress={() => handleScreen(data.name)}>
                            <Text style={Styles.Buttons}>{data.name}</Text>
                        </TouchableOpacity>
                    </View>)}
                {symbols.map((data, key) =>
                    <View key={data.id}>
                        <TouchableOpacity onPress={() => handleScreen(data.sym)}>
                            <Text style={Styles.Buttons}>{data.sym}</Text>
                        </TouchableOpacity>
                    </View>)
                }
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    Buttons: {
        margin: 10,
        justifyContent: 'space-evenly',
        backgroundColor: 'black',
        color: 'white',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 2,
        fontWeight: 'bold'
    },
    Clear: {
        margin: 10,
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        color: 'black',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 7,
        paddingRight: 7,
        borderRadius: 2,
        fontWeight: 'bold'
    },
    TotalButtonView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        borderColor: 'black',
        borderWidth: 5,
        padding: 10,
        marginBottom: 50,
        borderRadius: 20,
        backgroundColor: 'lightgrey'
    },
    DisplayValue: {
        margin: 100,
        fontSize: 50,
        fontWeight: 'bold'
    },
    MainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 20,
        backgroundColor: '#63C5DA'
    }
})