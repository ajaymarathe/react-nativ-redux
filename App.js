/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {changeCount} from './actions/counts';
import {bindActionCreators} from 'redux';

class App extends Component {
  state = {
    count: 0,
  };

  Add() {
    console.log('add');
    this.setState({
      count: this.state.count + 1,
    });
  }

  Remove() {
    console.log('remove');
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text> Count is: {this.state.count} </Text>
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

const mapStateToProps = (state, actions) => ({
  count: state.count,
});

export default connect(mapStateToProps)(App);
