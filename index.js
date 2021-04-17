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

const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);
