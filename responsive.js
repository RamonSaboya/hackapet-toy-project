// Lida com a responsavidade, padronizando as dimensões em qualquer dispositivo

import {
    Dimensions,
    PixelRatio,
    Platform
  } from 'react-native'

  const { width, height } = Dimensions.get('screen')

  const screen = Math.min(width, height)

  let ratio = PixelRatio.getFontScale()

  // X é a porcentagem de tela
  function em (x, t = false) {
      let size = (screen / 100) * x

      if (t === true && Platform.OS === "ios") {
          size = size * 0.8
      }

      return size
  }

  export default em
