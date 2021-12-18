import { createSlice } from '@reduxjs/toolkit'

import { fetchBounties } from './actions'

const initialState = {
  isLoading: false,
  error: undefined,
  bounties: []
}

const { actions: bountiesActions, reducer: bountiesReducer } = createSlice({
  name: 'bounties',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBounties.pending]: (state, { payload }) => ({
      ...state,
      isLoading: true,
      error: undefined
    }),
    [fetchBounties.fulfilled]: (state, { payload: { data } }) => ({
      ...state,
      isLoading: false,
      error: undefined,
      bounties: data
    }),
    [fetchBounties.rejected]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload
    })
  }
})

export { bountiesActions, bountiesReducer }
