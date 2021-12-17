import React, { memo } from 'react'
import { View, ActivityIndicator } from 'react-native'

import PropTypes from 'prop-types'

import LoadingIndicatorStyles from './LoadingIndicator.styls'
import { testIds } from './LoadingIndicator.testIds'

const LoadingIndicator = ({ disabled }) => {
  if (disabled) {
    return null
  }

  return (
    <View
      style={LoadingIndicatorStyles.container}
      testID={testIds.LoadingIndicator_Wrapper}
    >
      <ActivityIndicator size="large" testID={testIds.Indicator} />
    </View>
  )
}

LoadingIndicator.propTypes = {
  disabled: PropTypes.bool
}

export default memo(LoadingIndicator)
