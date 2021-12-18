import { StyleSheet } from 'react-native'

import { Styles, Colors } from '../../Theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 10
  },
  myRewardsBtn: {
    ...Styles.mainButton,
    backgroundColor: Colors.skyBlue,
    marginBottom: 10,
    marginTop: 0,
    borderRadius: 5
  }
})

export default styles
