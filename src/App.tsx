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
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import StackNav from './navigations/stackNavigator';

const App = () => {
  const client = new ApolloClient({
    uri: 'https://api.graphql.jobs/',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
