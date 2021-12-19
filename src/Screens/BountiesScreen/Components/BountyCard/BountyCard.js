import React, { memo } from 'react'
import { View, Text, useWindowDimensions } from 'react-native'
import PropTypes from 'prop-types'
import FastImage from 'react-native-fast-image'
import Carousel from 'react-native-snap-carousel'
import { useDispatch } from 'react-redux'

import { rewardsActions } from '../../../../Redux/Reducers/Rewards'
import { en } from '../../../../i18n'
import { Images, Metrics } from '../../../../Theme'
import { CustomButton } from '../../../../Components'

import { testIds } from './BountyCard.testIds'
import BountyCardStyles from './BountyCard.styles'

const BountyCard = ({ item, testID, showCollectBtn }) => {
  const dispatch = useDispatch()
  const {
    name: BountyName,
    pictures,
    activation_description,
    needed_points
  } = item
  const { width } = useWindowDimensions()

  const handleOnCollect = () => {
    dispatch(rewardsActions.collectReward(item))
  }

  const HeadingSection = () => (
    <View
      style={BountyCardStyles.headingView}
      testID={testIds.BountyCard_Heading_View}
    >
      <Text
        style={BountyCardStyles.nameText}
        numberOfLines={1}
        testID={testIds.BountyCard_Heading_Text}
      >
        {BountyName}
      </Text>
      <Text
        style={BountyCardStyles.pointsText}
        testID={testIds.BountyCard_points_Text}
      >
        {`${needed_points} ${en.Points}`}
      </Text>
    </View>
  )

  const PicturesSection = () => (
    <View
      style={BountyCardStyles.picturesView}
      testID={testIds.BountyCard_Pictures_View}
    >
      {pictures.length ? (
        <Carousel
          data={pictures}
          renderItem={({ item: picture, index }) => (
            <FastImage
              source={{ uri: picture.image }}
              style={BountyCardStyles.image}
              testID={`${testIds.BountyCard_Picture_Item}${index}`}
              resizeMode="cover"
            />
          )}
          sliderWidth={width}
          itemWidth={width * Metrics.bountyPicsWidth}
          layout={'stack'}
        />
      ) : (
        <FastImage
          source={Images.noImage}
          style={BountyCardStyles.image}
          resizeMode="cover"
          testID={testIds.BountyCard_NoPicture_Item}
        />
      )}
    </View>
  )

  const FooterSection = () => (
    <>
      <Text
        style={BountyCardStyles.headingText}
        numberOfLines={3}
        testID={testIds.BountyCard_Footer_Text}
      >
        {activation_description}
      </Text>
      {showCollectBtn && (
        <CustomButton
          testID={testIds.BountyCard_Footer_Collece_Btn}
          style={BountyCardStyles.collectBtn}
          onPress={handleOnCollect}
          text={en.Collect}
        />
      )}
    </>
  )

  return (
    <View style={BountyCardStyles.container} testID={testID}>
      <HeadingSection />
      <PicturesSection />
      <FooterSection />
    </View>
  )
}

BountyCard.propTypes = {
  item: PropTypes.object.isRequired,
  testID: PropTypes.string,
  showCollectBtn: PropTypes.bool
}

BountyCard.defaultProps = {
  showCollectBtn: true
}

export default memo(BountyCard)
