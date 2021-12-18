import { isListContainItemById } from '../../../Utils/Helpers'

import { rewardsActions } from './slice'

const collectReward = (reward) => (dispatch, getState) => {
  const { rewards } = getState().rewardsReducer
  const isCollected = isListContainItemById(rewards, reward)
  !isCollected && dispatch(rewardsActions.collectReward(reward))
}

export { collectReward }
