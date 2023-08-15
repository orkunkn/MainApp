import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';


export function ScreenA({ navigation }) {

    const onPressHandler = () => {
        navigation.navigate('Screen_B', {ItemName: 'Item from Screen A', ItemId: 12})
    }
    
    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Screen A
            </Text>
            <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}>
                <Text style={styles.text}>
                    Go to Screen B
                </Text>
            </Pressable>
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