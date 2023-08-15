import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ImageBackground,
} from 'react-native';
import MashButton from './CustomButton';

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
    <ImageBackground style={styles.body} source={{ uri: 'https://w7.pngwing.com/pngs/485/388/png-transparent-drawn-cartoon-of-a-wall-cartoon-one-side-wall-thumbnail.png' }}>
      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput
        style={styles.input}
        placeholder='e.g. John'
        onChangeText={(value) => SetName(value)}
      />
      <MashButton
        onPressFunction={onPressHandler}
        title={submitted ? 'Clear' : 'Submit'}
      />
      {submitted ?
        <View style={styles.body}>
          <Text style={styles.text}>
            You are registered as {name}
          </Text>
          <Image
            source={require('./assets/done.png')}
            style={styles.image}
          />
        </View>
        :
        <Image
          source={{ uri: 'https://img.freepik.com/free-vector/oops-explosion-vector_53876-17099.jpg?w=826&t=st=1692079798~exp=1692080398~hmac=9fe46916f78d5c3ab10cefceed54b1e730c5a70c344261c9f9c952ec11822c23' }}
          style={styles.image}
        />
      }
    </ImageBackground>
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
    textAlign: 'center'
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
  image: {
    width: 100,
    height: 100,
    margin: 10
  }
});

export default App;