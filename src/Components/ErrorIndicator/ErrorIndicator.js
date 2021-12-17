import React, { memo } from 'react'
import { Pressable, Text, Image } from 'react-native'
import PropTypes from 'prop-types'

import { Images } from '../../Theme'

import ErrorStyles from './ErrorIndicator.styls'
import { testIds } from './ErrorIndicator.testIds'

const ErrorIndicator = ({ onTryAgain, errorMessage }) => {
  return (
    <Pressable
      style={ErrorStyles.container}
      testID={testIds.ErrorIndicator_Wrapper}
      onPress={() => onTryAgain?.()}
    >
      <Text
        style={ErrorStyles.retryText}
        testID={testIds.ErrorIndicator_message}
      >
        {errorMessage || ''}
      </Text>
      <Image
        source={Images.ic_reload}
        style={ErrorStyles.reloadImg}
        testID={testIds.ErrorIndicator_Image}
      />
    </Pressable>
  )
}

ErrorIndicator.propTypes = {
  onTryAgain: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired
}

export default memo(ErrorIndicator)
