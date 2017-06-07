// Index.ios.js - place code for ios

// Import lib to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


// Create a component
// Note: flex: 1 style needed here to ensure scrollview can scroll all the way to bottom of view
const App = () => (
  <View style={{ flex: 1 }}> 
      <Header headerText={'Albums'} />
      <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
