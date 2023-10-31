//import './src/config/ReactotronConfig';
import './src/config/StatusBarConfig';

import React from 'react';
import Routes from './src/routes';
import { Provider } from 'react-redux'
import store from './src/store';

import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Provider store={store}> 
      <Routes />
    </Provider>
  );
}

