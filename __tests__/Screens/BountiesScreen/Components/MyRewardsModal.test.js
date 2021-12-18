import React from 'react'

import { render } from '@testing-library/react-native'
import { useSelector, useDispatch } from 'react-redux'

import { MyRewardsModal } from '../../../../src/Screens/BountiesScreen/Components'
import { testIds } from '../../../../src/Screens/BountiesScreen/Components/MyRewardsModal/MyRewardsModal.testIds'

const props = {
  isVisible: true,
  dismiss: jest.fn()
}

const mockedRewards = {
  rewards: [
    {
      id: 1,
      name: 'reward one',
      pictures: [],
      activation_description: '',
      needed_points: 0
    },
    {
      id: 1,
      name: 'reward two',
      pictures: [],
      activation_description: '',
      needed_points: 1
    }
  ]
}
describe('MyRewardsModal Component', () => {
  useDispatch.mockReturnValue(jest.fn())
  useSelector.mockImplementation(() => mockedRewards)
  let comp = null
  beforeEach(() => {
    comp = render(<MyRewardsModal {...props} />)
  })
  it('should render component successfully', () => {
    const { getByTestId } = comp
    expect(getByTestId(testIds.MyRewardsModal_Modal)).toBeTruthy()
    expect(getByTestId(testIds.MyRewardsModal_Wrapper)).toBeTruthy()
    expect(getByTestId(testIds.MyRewardsModal_CloseText)).toBeTruthy()
    expect(getByTestId(testIds.MyRewardsModal_List)).toBeTruthy()
  })

  it('should render reward items successfully', () => {
    const { getByTestId } = comp
    const item1 = getByTestId(`${testIds.MyRewardsModal_List_Item}0`)
    const item2 = getByTestId(`${testIds.MyRewardsModal_List_Item}0`)
    expect(item1).toBeTruthy()
    expect(item2).toBeTruthy()
  })
})
