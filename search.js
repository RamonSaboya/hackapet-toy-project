import React from 'react';
import { StyleSheet,
          View,
          Button,
          Text,
          TextInput,
          Alert } from 'react-native'
import em from './responsive'

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = { title: null }
  }

  render() {
    return (
      <View style = { styles.view }>
        <View style = { styles.box }>
          <TextInput style = { styles.input }
            placeholder = 'Digite o título'
            placeholderTextColor = 'lightgray'
            onChangeText = {
              (title) => this.setState({ title })
            }
          />
          <Button style = { styles.button }
            title = 'SEARCH'
            onPress = { () => {
              if (this.state.title) {
                this.props.navigation.navigate('Info', {
                  title: this.state.title,
                })
              } else {
                Alert.alert(
                  'Título vazio',
                  'Você precisa digitar um título',
                  [
                    { text: 'Ok' },
                  ],
                  { cancelable: false }
                )
              }
            }}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#FFF',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  box: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: em (75),
    maxHeight: em (30),
  },
  input: {
    borderColor: '#2196F3',
    borderWidth: em(0.25),
    borderRadius: em(2),
    padding: em(2),
  },
  button: {

  },
})
