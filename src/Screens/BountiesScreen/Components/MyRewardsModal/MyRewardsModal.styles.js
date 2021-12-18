import { StyleSheet } from 'react-native'

import { Fonts, Colors } from '../../../../Theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey
  },
  ContentWrapper: {
    flex: 1,
    padding: 10
  },
  closeText: {
    fontSize: Fonts.large,
    fontWeight: 'bold',
    marginBottom: 10
  }
})

export default styles
