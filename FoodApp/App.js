import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from './src/pages/Categories/Categories';
import Meals from './src/pages/Meals/Meals';
import Detail from './src/pages/Detail/Detail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          cardStyle: {
              backgroundColor: 'orange',
          },
          headerTitleAlign: 'center',
          headerTintColor:'orange',
        }}
      >
        <Stack.Screen name='Categories' component={Categories} options={{ title: 'Categories' }} />
        <Stack.Screen name='Meals' component={Meals} options={{ title: 'Meals', headerBackTitleVisible:true }} />
        <Stack.Screen name='Detail' component={Detail} options={{ title: 'Detail', headerBackTitleVisible:true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
