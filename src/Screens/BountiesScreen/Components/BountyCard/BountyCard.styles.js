import { StyleSheet, Dimensions } from 'react-native'

import { Fonts, Colors, Metrics } from '../../../../Theme'

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height * Metrics.bountyCardHeight,
    marginVertical: 5,
    backgroundColor: Colors.skyBlue,
    borderRadius: 5,
    padding: 10
  },
  headingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  picturesView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  nameText: {
    fontSize: Fonts.large,
    width: '70%'
  },
  pointsText: {
    fontSize: Fonts.medium,
    color: Colors.darkBlue,
    fontWeight: 'bold'
  },
  image: {
    width: '100%',
    height: '100%'
  }
})

export default styles
