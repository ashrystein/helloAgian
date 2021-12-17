import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  error: undefined,
  bounties: []
}

const { actions: bountiesActions, reducer: bountiesReducer } = createSlice({
  name: 'bounties',
  initialState,
  reducers: {
    fetchStart: (state, { payload }) => ({
      ...state,
      isLoading: true,
      error: undefined
    }),
    fetchError: (state, { payload: { error } }) => ({
      ...state,
      isLoading: false,
      error: error
    }),
    fetchSuccess: (state, { payload: { data } }) => ({
      ...state,
      isLoading: false,
      error: undefined,
      bounties: data
    })
  }
})

export { bountiesActions, bountiesReducer }
