/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNav from './navigations/rootNavigator';
import {Provider, RootStore} from './store/index';

const App = () => {
  return (
    <Provider value={RootStore}>
      <NavigationContainer>
        <RootNav />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
