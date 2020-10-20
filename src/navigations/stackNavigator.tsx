import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import homeScreen from '../screen/home';
import detailsScreen from '../screen/Details/details';
import {stackList} from '../declarations';

const StackNav = () => {
  const Stack = createStackNavigator<stackList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={homeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={detailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
