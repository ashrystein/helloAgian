import { StyleSheet } from 'react-native'

import { Fonts, Colors } from '../../Theme'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  retryText: {
    fontSize: Fonts.medium,
    color: Colors.frenchBlue,
    marginRight: 10
  },
  reloadImg: {
    width: 15,
    height: 15
  }
})

export default styles
