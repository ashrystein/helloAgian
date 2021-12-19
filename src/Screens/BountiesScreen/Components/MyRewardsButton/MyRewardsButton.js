import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { rewardsSelectors } from '../../../../Redux/Reducers/Rewards'
import { en } from '../../../../i18n'
import { CustomButton } from '../../../../Components'

import MyRewardsButtonStyles from './MyRewardsButton.styles'
import { testIds } from './MyRewardsButton.testIds'

const MyRewardsButton = ({ onPress }) => {
  const { rewards } = useSelector(rewardsSelectors.selectRewards)

  return (
    <CustomButton
      onPress={onPress}
      text={`${en.Collected_Rewards} (${rewards?.length})`}
      testID={testIds.MyRewardsButton_Btn}
      style={MyRewardsButtonStyles.myRewardsBtn}
    />
  )
}

MyRewardsButton.propTypes = {
  onPress: PropTypes.func.isRequired
}

export default memo(MyRewardsButton)
