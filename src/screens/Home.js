import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import CustomButton from '../utils/CustomButton';
import { Text, View, StyleSheet } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import { useSelector, useDispatch } from 'react-redux';
import { setName } from "../redux/actions";

const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default',
    },
    () => { },
    error => { console.log(error) }
);

export function Home({ navigation }) {

    const { name } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    // const [name, setName] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            // AsyncStorage.getItem('UserName')
            //     .then(value => {
            //        if (value != null) {
            //             setName(value);
            //         }
            db.transaction((tx) => {
                "SELECT Name FROM Users",
                    [],
                    (tx, results) => {
                        var len = results.rows.length;
                        if (len > 0) {
                            var userName = results.row.item(0).Name;
                            dispatch(setName(userName));
                        }
                    }
            })
        } catch (error) {
            console.log(error)
        }
    }

    const removeData = async () => {
        try {
            //await AsyncStorage.removeItem('UserName');
            db.transaction((tx) => {
                tx.executeSql(
                    "DELETE FROM Users",
                    [],
                    () => { navigation.navigate('Login') },
                    error => { console.log(error) }
                )
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Welcome {name} !
            </Text>
            <CustomButton
                title='Remove Name'
                onPressFunction={removeData}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10
    }
})