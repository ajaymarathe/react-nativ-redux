/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';

class App extends Component {
  Add() {
    this.props.dispatch({type: 'INCREMENT'});
  }

  Remove() {
    this.props.dispatch({type: 'DECREMENT'});
  }

  render() {
    console.log('this.props:', this.props);
    return (
      <View style={styles.mainContainer}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text> Count is: {this.props.count} </Text>
        </View>
        <View style={styles.secondContainer}>
          <Button title="Add" onPress={() => this.Add()} />
          <Button title="Remove" onPress={() => this.Remove()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  secondContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps)(App);
