import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import homeScreen from '../screen/home';
import detailsScreen from '../screen/Details/details';
import favouriteScreen from '../screen/favourite';
import {homeStackList, favouriteStackList} from '../declarations';

const HomeNav = () => {
  const Stack = createStackNavigator<homeStackList>();

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

const FavouriteNav = () => {
  const Stack = createStackNavigator<favouriteStackList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favourite"
        component={favouriteScreen}
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

const RootNav = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeNav} />
      <Drawer.Screen name="Favourite" component={FavouriteNav} />
    </Drawer.Navigator>
  );
};
export default RootNav;
