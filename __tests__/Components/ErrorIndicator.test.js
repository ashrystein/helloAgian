import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import { ErrorIndicator } from '../../src/Components'
import { testIds } from '../../src/Components/ErrorIndicator/ErrorIndicator.testIds'

const props = {
  onTryAgain: jest.fn(),
  errorMessage: 'Try Again'
}
describe('Error Component', () => {
  let comp = null
  beforeEach(() => {
    comp = render(<ErrorIndicator {...props} />)
  })
  it('should show component successfully', () => {
    const { getByTestId } = comp
    expect(getByTestId(testIds.ErrorIndicator_Wrapper)).toBeTruthy()
    expect(getByTestId(testIds.ErrorIndicator_message)).toBeTruthy()
    expect(getByTestId(testIds.ErrorIndicator_Image)).toBeTruthy()
  })

  it('should show error message passed from props', () => {
    const { getByTestId } = comp
    expect(getByTestId(testIds.ErrorIndicator_message).children[0]).toBe(
      props.errorMessage
    )
  })

  it('should show fire onTryAgain function', () => {
    const { getByTestId } = comp
    const tryAgain = getByTestId(testIds.ErrorIndicator_Wrapper)
    fireEvent.press(tryAgain)
    expect(props.onTryAgain).toHaveBeenCalled()
  })
})
