import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResumeFromScreen from './screens/ResumeFrom'; // add

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ResumeFrom" options={{title:'ResumeFrom'}} component={ResumeFromScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;