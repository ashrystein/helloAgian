import { getBounties } from '../../../Services/Apis'

import { bountiesActions } from './slice'

const MOCKED_CLINT_ID = '5189'

const fetchBounties = () => async (dispatch) => {
  dispatch(bountiesActions.fetchStart())
  try {
    const response = await getBounties(MOCKED_CLINT_ID)
    dispatch(bountiesActions.fetchSuccess(response))
  } catch (error) {
    dispatch(bountiesActions.fetchError(error))
  }
}

export { fetchBounties }
