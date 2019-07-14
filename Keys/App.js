/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import loginPage from './LogInPage';
import passwordList from './PasswordList';

const NavigationApp = createStackNavigator ({
  login: {screen: loginPage},
  passwordList: {screen: passwordList}
  },
  {
    headerMode:'none',
    navigationOptions:{
      headerVisible: false,
    }
    });

const Container = createAppContainer(NavigationApp);

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <Container />
    );
  }
}