import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';

export function ScreenB({ navigation, route }) {

    const { ItemName, ItemId } = route.params;

    const onPressHandler = () => {
        navigation.navigate('Screen_A')
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Screen B
            </Text>
            <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}>
                <Text style={styles.text}>
                    Go to Screen A
                </Text>
            </Pressable>
            <Text style={styles.text}>
                {ItemName}
            </Text>
            <Text style={styles.text}>
                {ItemId}
            </Text>
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

