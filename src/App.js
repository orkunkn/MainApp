import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ScreenA } from './ScreenA';
import { ScreenB } from './ScreenB';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            header: () => null
          }}
          name="Screen_A"
          component={ScreenA}
        />
        <Tab.Screen
          name="Screen_B"
          component={ScreenB}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;