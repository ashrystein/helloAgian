import store from '../../src/Redux/Store'

import { rewardsActions } from '../../src/Redux/Reducers/Rewards'

const rewardStub = [
  { id: 1, name: 'reward one' },
  { id: 2, name: 'reward two' }
]
describe('Rewards reducer', () => {
  beforeEach(() => {
    store.dispatch(rewardsActions.collectReward(rewardStub[0]))
  })
  it('should add new reward to rewards list', () => {
    store.dispatch(rewardsActions.collectReward(rewardStub[0]))
    store.dispatch(rewardsActions.collectReward(rewardStub[1]))
    const { rewards } = store.getState().rewardsReducer
    expect(rewards.length).toBe(2)
  })

  it('should not add existing reward to rewards list', () => {
    store.dispatch(rewardsActions.collectReward(rewardStub[0]))
    const { rewards } = store.getState().rewardsReducer
    expect(rewards.length).not.toBe(3)
  })
})
