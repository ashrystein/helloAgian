import { StyleSheet, Dimensions } from 'react-native'

import { Fonts, Colors, Metrics, Styles } from '../../../../Theme'

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height * Metrics.bountyCardHeight,
    marginVertical: 5,
    backgroundColor: Colors.white,
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
    marginVertical: 10,
    ...Styles.shadow
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
  },
  collectBtn: (isItemCollected) => ({
    ...Styles.mainButton,
    backgroundColor: Colors.gold,
    opacity: isItemCollected ? 0.3 : 1
  }),
  collectText: {
    fontSize: Fonts.medium,
    color: Colors.darkBlue
  }
})

export default styles
