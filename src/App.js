import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Home } from './screens/Home';
import Login from './screens/Login';
import Map from './screens/Map';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { Store } from './redux/store';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Login'>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Map"
            component={Map}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;