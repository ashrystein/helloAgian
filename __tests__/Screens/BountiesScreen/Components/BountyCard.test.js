import React from 'react'

import { render } from '@testing-library/react-native'

import { BountyCard } from '../../../../src/Screens/BountiesScreen/Components'
import { testIds } from '../../../../src/Screens/BountiesScreen/Components/BountyCard/BountyCard.testIds'

const props = {
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
describe('BountyCard Component', () => {
  let comp = null
  beforeEach(() => {
    comp = render(<BountyCard {...props} />)
  })
  it('should render component successfully', () => {
    const { getByTestId } = comp
    expect(getByTestId(props.testID)).toBeTruthy()
  })

  it('should render heading Section successfully', () => {
    const { getByTestId } = comp
    expect(getByTestId(testIds.BountyCard_Heading_View)).toBeTruthy()
    const nameText = getByTestId(testIds.BountyCard_Heading_Text)
    const pointsText = getByTestId(testIds.BountyCard_points_Text)
    expect(nameText.children[0]).toBe(props.item.name)
    expect(pointsText.children[0]).toBe(`${props.item.needed_points} Points`)
  })

  it('should render Pictures Section with pictures from props and not default picture successfully', () => {
    const { getByTestId, queryByTestId } = comp
    expect(getByTestId(testIds.BountyCard_Pictures_View)).toBeTruthy()
    expect(getByTestId(`${testIds.BountyCard_Picture_Item}0`)).toBeTruthy()
    expect(getByTestId(`${testIds.BountyCard_Picture_Item}1`)).toBeTruthy()
    expect(queryByTestId(testIds.BountyCard_NoPicture_Item)).not.toBeTruthy()
  })

  it('should render default picture successfully', () => {
    props.item.pictures = []
    const { getByTestId, queryByTestId } = render(<BountyCard {...props} />)
    expect(getByTestId(testIds.BountyCard_Pictures_View)).toBeTruthy()
    expect(
      queryByTestId(`${testIds.BountyCard_Picture_Item}0`)
    ).not.toBeTruthy()
    expect(
      queryByTestId(`${testIds.BountyCard_Picture_Item}1`)
    ).not.toBeTruthy()
    expect(getByTestId(testIds.BountyCard_NoPicture_Item)).toBeTruthy()
  })

  it('should render footer successfully', () => {
    const { getByTestId } = comp
    const footerText = testIds.BountyCard_Footer_Text
    expect(getByTestId(footerText)).toBeTruthy()
    expect(getByTestId(footerText).children[0]).toBe(
      props.item.activation_description
    )
  })
})
