import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const MashButton = (props) => {

    return (
        <TouchableOpacity
            onPress={props.onPressFunction}
            style={styles.button}
        >
            <Text style={styles.text}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#000000',
        fontSize: 20,
        margin: 10,
        textAlign: 'center'
    },
    button: {
        width: 150,
        height: 50,
        backgroundColor: '#fff03f',
        alignItems: 'center',
    },
})

export default MashButton