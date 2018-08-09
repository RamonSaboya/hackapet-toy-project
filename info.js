import React from 'react';
import { StyleSheet,
          View,
          Button,
          Text,
          ActivityIndicator,
          Alert,
          Image } from 'react-native'
import em from './responsive'
import TVTitle from './tv_title'
import DescText from './desc_text'

export default class Info extends React.Component {
  constructor(props){
    super(props);

    const { navigation } = this.props
    const title = navigation.getParam('title')

    this.state = {
      title: title,
      isLoading: true,
    }
  }

  componentDidMount(){
    return fetch('https://omdb-api-server.herokuapp.com/search/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: this.state.title,
        }),
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          data: responseJson,
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style = { styles.loading } >
          <ActivityIndicator
            size='large'
            color='#2196F3'
          />
        </View>
      )
    }

    if (this.state.data.hasOwnProperty('error')) {
      Alert.alert(
        'Título não encontrado',
        'Não há nenhum registro com \'' + this.state.title + '\'',
        [
          { text: 'Voltar', onPress: () => {
            this.props.navigation.navigate('Search')
          }},
        ],
        { cancelable: false }
      )

      return (
        <View style = { styles.view } />
      )
    }

    const data = this.state.data

    return (
      <View style = { styles.view }>
        <TVTitle
          text = { data.Title }
        />
        <Image style = { styles.poster }
          source = {{ uri: data.Poster }}
        />
        <DescText
          desc = { 'Writer(s)' }
          text = { data.Writer }
        />
        <DescText
          desc = { 'Actor(s)' }
          text = { data.Actors }
        />
        <DescText
          desc = { 'Plot' }
          text = { data.Plot }
        />
        <DescText
          desc = { 'IMDB Rating' }
          text = { data.imdbRating }
        />
        <Button
          title = 'BACK'
          onPress = { () => this.props.navigation.navigate('Search') }
        />
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
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'nowrap',
    width: em(100),
  },
  loading: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  poster: {
    width: em(50),
    height: em(70),
    resizeMode: 'stretch',
  },
})
