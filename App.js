import React from 'react';
import { StyleSheet,
          View,
          StatusBar,
          Text,
          Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Search from './search'
import Info from './info'

const StackNavigator = createStackNavigator(
  {
    Search: Search,
    Info: Info,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Search',
  }
);

export default class App extends React.Component {
  render() {
    return (
      <View style = { styles.view }>
        { Platform.OS === 'ios' &&
          <StatusBar barStyle = 'default' /> }
        <View
          style = {
            Platform.OS === 'android' ?
              styles.statusBarAndroid : styles.statusBariOS
          }
        />
        <StackNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#FFF',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  statusBarAndroid: {
    backgroundColor: '#000',
    height: Expo.Constants.statusBarHeight,
  },
  statusBariOS: {
    backgroundColor: 'transparent',
    height: Expo.Constants.statusBarHeight,
  },
})
