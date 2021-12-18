import { createAsyncThunk } from '@reduxjs/toolkit'

import { getBounties } from '../../../Services/Apis'

const MOCKED_CLINT_ID = '5189'

const fetchBounties = createAsyncThunk(
  'bounties/fetchBounties',
  async (params, { rejectWithValue }) => {
    try {
      return await getBounties(MOCKED_CLINT_ID)
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export { fetchBounties }
