import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const App = () => {

  const [name, SetName] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3)
      SetSubmitted(!submitted);
    else {
      Alert.alert('Warning', 'The name must be longer than 3 characters', [
        { text: 'OK' },
        { text: 'No' },
        { text: 'Yes' },
      ])
    }
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput
        style={styles.input}
        placeholder='e.g. John'
        onChangeText={(value) => SetName(value)}
      />
      <TouchableOpacity
        onPress={onPressHandler}
        style={styles.button}
      >
        <Text style={styles.text}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </TouchableOpacity>
      {submitted ?
        <Text style={styles.text}>
          You are registered as {name}
        </Text>
        :
        null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: '#fff03f',
    alignItems: 'center',
  },
});

export default App;