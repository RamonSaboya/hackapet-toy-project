import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import em from './responsive'

export default class DescText extends React.Component {
  render () {
    const { desc, text } = this.props;

    return (
      <View style = { styles.wrapper }>
        <Text>
          { desc }
        </Text>
        <Text
          style = { styles.text }
        >
          { text }
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: em(85),
  },
  text: {
    fontSize: em(3.5),
    fontWeight: 'bold',
    padding: em(2),
    maxWidth: em(85),
    borderWidth: em(0.2),
    borderColor: '#2196F3',
  },
})
