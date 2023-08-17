import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import CustomButton from '../utils/CustomButton';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import { useSelector, useDispatch } from 'react-redux';
import { setName, getCities } from "../redux/actions";
import { FlatList } from 'react-native-gesture-handler';
import PushNotification from "react-native-push-notification";

const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default',
    },
    () => { },
    error => { console.log(error) }
);

export function Home({ navigation }) {

    const { name, cities } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    // const [name, setName] = useState('');

    useEffect(() => {
        getData();
        dispatch(getCities());
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

    const handleNotification = (item) => {
        PushNotification.localNotification({
            channelId: "test-channel",
            title: "You clicked on " + item.country,
            message: item.city
        });
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Welcome {name} !
            </Text>
            <FlatList
                data={cities}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => { handleNotification(item) }}
                    >
                        <View style={styles.item}>
                            <Text style={styles.title}>{item.country}</Text>
                            <Text style={styles.subtitle}>{item.city}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
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
    },
    item: {
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#cccccc',
        borderRadius: 5,
        margin: 7,
        width: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        margin: 10,
    },
    subtitle: {
        fontSize: 20,
        margin: 10,
        color: '#999999',
    }
})