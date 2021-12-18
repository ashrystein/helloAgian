import store from '../../src/Redux/Store'

import { bountiesActions } from '../../src/Redux/Reducers/Bounties'

const bountiesStub = {
  data: [
    {
      activation_description:
        'Super du hast X Punkte erreicht! Hol dir jetzt gleich die Prämie Y!'
    }
  ],
  status: 200
}

jest.mock('../../src/Services/Apis', () => {
  return {
    getBounties: jest.fn(() => bountiesStub)
  }
})

describe('Bounties reducer', () => {
  it('should set isLoading to (true) and error to (undefined)', () => {
    store.dispatch(bountiesActions.fetchBounties())
    const { isLoading, error } = store.getState().bountiesReducer
    expect(isLoading).toBe(true)
    expect(error).toBe(undefined)
  })

  it('should get bounties successfully and errot to (undefined) and isLoading to false', () => {
    store.dispatch(bountiesActions.fetchBounties())
    return new Promise((resolve) => {
      setTimeout(() => {
        const { isLoading, error, bounties } = store.getState().bountiesReducer
        expect(bounties).toEqual(bountiesStub.data)
        expect(isLoading).toBe(false)
        expect(error).toBe(undefined)
        resolve(1)
      }, 1000)
    })
  })
})
