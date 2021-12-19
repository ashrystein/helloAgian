import React, { memo } from 'react'
import { Pressable, Text } from 'react-native'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { rewardsSelectors } from '../../../../Redux/Reducers/Rewards'
import { en } from '../../../../i18n'

import MyRewardsButtonStyles from './MyRewardsButton.styles'
import { testIds } from './MyRewardsButton.testIds'

const MyRewardsButton = ({ onPress }) => {
  const { rewards } = useSelector(rewardsSelectors.selectRewards)

  return (
    <Pressable
      style={MyRewardsButtonStyles.myRewardsBtn}
      onPress={onPress}
      testID={testIds.MyRewardsButton_Btn}
    >
      <Text
        testID={testIds.MyRewardsButton_Text}
      >{`${en.Collected_Rewards} (${rewards?.length})`}</Text>
    </Pressable>
  )
}

MyRewardsButton.propTypes = {
  onPress: PropTypes.func.isRequired
}

export default memo(MyRewardsButton)
