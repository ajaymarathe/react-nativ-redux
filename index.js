/* eslint-disable react/react-in-jsx-scope */
/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import Counter from './App';
import {name as appName} from './app.json';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';

const store = createStore(reducer);
const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);
