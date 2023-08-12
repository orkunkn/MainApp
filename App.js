import React, { useState } from 'react';

import {
  Button,
  StyleSheet, Text, View,
} from 'react-native';

const App = () => {
  const [number, setNumber] = useState(0)
  const [click, setClick] = useState(0)

  const onClickHandler = () => {
    setNumber(number+5)
    setClick(click+1)
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{number}</Text>
      <Button title='Add' onPress={onClickHandler}></Button>
      <Text style={styles.text}>You clicked {click} times</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10
  }
});

export default App;