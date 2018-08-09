import React from 'react'
import { Text, StyleSheet } from 'react-native'
import em from './responsive'

export default class TVTitle extends React.Component {
  render () {
    const { text } = this.props;

    return (
      <Text
        style = { styles.text }
      >
        { text.toUpperCase() }
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: em(10),
    fontWeight: 'bold',
  },
})
