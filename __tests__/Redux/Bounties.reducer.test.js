import store from '../../src/Redux/Store'

import { bountiesActions } from '../../src/Redux/Reducers/Bounties/slice'

const bountiesStub = {
  data: [
    {
      activation_description:
        'Super du hast X Punkte erreicht! Hol dir jetzt gleich die Prämie Y!'
    }
  ],
  status: 200
}
describe('Bounties reducer', () => {
  it('should set isLoading to (true) and error to (undefined)', () => {
    store.dispatch(bountiesActions.fetchStart())
    const { isLoading, error } = store.getState().bountiesReducer
    expect(isLoading).toBe(true)
    expect(error).toBe(undefined)
  })

  it('should get bounties successfully and errot to (undefined) and isLoading to false', () => {
    store.dispatch(bountiesActions.fetchSuccess(bountiesStub))
    const { isLoading, error, bounties } = store.getState().bountiesReducer
    expect(bounties).toEqual(bountiesStub.data)
    expect(isLoading).toBe(false)
    expect(error).toBe(undefined)
  })

  it('should set errot to (error) and isLoading to false', () => {
    store.dispatch(bountiesActions.fetchError({ error: 'error' }))
    const { isLoading, error } = store.getState().bountiesReducer
    expect(isLoading).toBe(false)
    expect(error).toEqual({ error: 'error' })
  })
})
