import React from 'react'

import { render, fireEvent, act } from '@testing-library/react-native'

import { CustomButton } from '../../src/Components'

const props = {
  onPress: jest.fn(),
  testID: 'CustomButton_ID',
  text: 'CustomButton name'
}

describe('MyRewardsButton Component', () => {
  let comp = null
  beforeEach(() => {
    comp = render(<CustomButton {...props} />)
  })
  it('should render component successfully', () => {
    const { getByTestId } = comp
    expect(getByTestId(props.testID)).toBeTruthy()
    expect(getByTestId(`${props.testID}_Text`)).toBeTruthy()
  })

  it('should call onPress successfully', () => {
    const { getByTestId } = comp
    const btn = getByTestId(props.testID)
    act(() => fireEvent.press(btn))
    expect(props.onPress).toHaveBeenCalled()
  })

  it('should show correct text', () => {
    const { getByTestId } = comp
    const btnText = getByTestId(`${props.testID}_Text`)
    expect(btnText.children[0]).toEqual(props.text)
  })
})
