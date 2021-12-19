import React, { memo } from 'react'
import { Text, Pressable } from 'react-native'

import PropTypes from 'prop-types'

import CustomButtonStyles from './CustomButton.styls'

const CustomButton = ({ onPress, testID, text, style }) => {
  return (
    <Pressable
      style={[CustomButtonStyles.button, style]}
      onPress={onPress}
      testID={testID}
    >
      <Text testID={`${testID}_Text`}>{text}</Text>
    </Pressable>
  )
}

CustomButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  testID: PropTypes.string,
  text: PropTypes.string.isRequired,
  style: PropTypes.object
}

export default memo(CustomButton)
