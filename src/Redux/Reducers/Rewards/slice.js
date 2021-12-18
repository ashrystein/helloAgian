import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rewards: []
}

const { actions: rewardsActions, reducer: rewardsReducer } = createSlice({
  name: 'rewards',
  initialState,
  reducers: {
    collectReward: (state, { payload }) => ({
      rewards: [...state.rewards, payload]
    })
  }
})

export { rewardsActions, rewardsReducer }
