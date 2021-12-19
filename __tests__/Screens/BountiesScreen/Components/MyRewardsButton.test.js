import React from 'react'

import { render, fireEvent, act } from '@testing-library/react-native'
import { useSelector, useDispatch } from 'react-redux'

import { MyRewardsButton } from '../../../../src/Screens/BountiesScreen/Components'
import { testIds } from '../../../../src/Screens/BountiesScreen/Components/MyRewardsButton/MyRewardsButton.testIds'

const props = {
  onPress: jest.fn()
}

const mockedRewards = {
  rewards: [
    { id: 1, name: 'reward one' },
    { id: 1, name: 'reward two' }
  ]
}
describe('MyRewardsButton Component', () => {
  useDispatch.mockReturnValue(jest.fn())
  useSelector.mockImplementation(() => mockedRewards)
  let comp = null
  beforeEach(() => {
    comp = render(<MyRewardsButton {...props} />)
  })
  it('should render component successfully', () => {
    const { getByTestId } = comp
    expect(getByTestId(testIds.MyRewardsButton_Btn)).toBeTruthy()
    expect(getByTestId(testIds.MyRewardsButton_Text)).toBeTruthy()
  })

  it('should call onPress successfully', () => {
    const { getByTestId } = comp
    const btn = getByTestId(testIds.MyRewardsButton_Btn)
    act(() => fireEvent.press(btn))
    expect(props.onPress).toHaveBeenCalled()
  })

  it('should show correct number of rewards', () => {
    const { getByTestId } = comp
    const btnText = getByTestId(testIds.MyRewardsButton_Text)
    expect(btnText.children[0]).toEqual('Collected Rewards (2)')
  })
})
