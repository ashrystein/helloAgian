import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { render } from '@testing-library/react-native'

import { BountiesScreen } from '../../../src/Screens'
import { testIds } from '../../../src/Screens/BountiesScreen/BountiesScreen.testIds'

const item = {
  item: {
    name: 'bounty one',
    pictures: [
      {
        image:
          'https://staging-backend-bucket.storage.googleapis.com:443/media/clients/default/images/index1569221073262.jpeg'
      },
      {
        image:
          'https://staging-backend-bucket.storage.googleapis.com:443/media/clients/default/images/index1569221073262.jpeg'
      }
    ],
    activation_description: 'activation description',
    needed_points: 3
  },
  testID: 'bountyItem1'
}

const mockedBounties = {
  bounties: [item.item, { ...item.item, name: 'bounty two' }],
  isLoading: false,
  error: undefined
}

describe('Bounties Screen', () => {
  useDispatch.mockReturnValue(jest.fn())
  useSelector.mockImplementation(() => mockedBounties)
  let comp = null
  beforeEach(() => {
    comp = render(<BountiesScreen />)
  })
  it('should render bounties screen successfully', () => {
    const { getByTestId } = comp
    expect(getByTestId(testIds.Bounties_List_Wrapper)).toBeTruthy()
  })

  it('should render bounties list successfully', async () => {
    const { getByTestId } = comp
    expect(getByTestId(`${testIds.Bounties_List_Item}${0}`)).toBeTruthy()
    expect(getByTestId(`${testIds.Bounties_List_Item}${1}`)).toBeTruthy()
  })
})
