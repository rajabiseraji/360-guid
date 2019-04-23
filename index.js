import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  asset
} from 'react-360';

import {
  NativeRouter,
  Route,
  Link
} from "react-router-native";

import Home from './src/components/MainPage.react';
import Historical from './src/components/HistoricalPage.react';
import Natural from './src/components/NaturalPage.react';
import Adventure from './src/components/AdventurePage.react';
import PlacePage from './src/components/PlacePage.react';
import TransitionContainer from './src/components/TransitionContainer.react';

const App = () => (
  <NativeRouter>
    <View style={styles.container}>
      <Route exact path="/" component={Home} />
      <Route path="/natural" component={Natural} />
      <Route path="/historical" component={Historical} />
      <Route path="/adventure" component={Adventure} />
      <Route path="/place/:category/:name" component={PlacePage} />
    </View>
  </NativeRouter>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
})

// register the root component
// this will be used from client.js by r360.createRoot('BasicAppTemplate' ...)
AppRegistry.registerComponent('TransitionContainer', () => TransitionContainer);
AppRegistry.registerComponent('App', () => App);
