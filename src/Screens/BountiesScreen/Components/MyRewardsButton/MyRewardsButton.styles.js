import { StyleSheet } from 'react-native'

import { Colors, Styles } from '../../../../Theme'

const styles = StyleSheet.create({
  myRewardsBtn: {
    ...Styles.mainButton,
    backgroundColor: Colors.skyBlue,
    marginBottom: 10,
    marginTop: 0,
    borderRadius: 5
  }
})

export default styles
