import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchBounties } from '../../Redux/Reducers/Bounties/actions'
import { selectBounties } from '../../Redux/Reducers/Bounties/selectors'

import { LoadingIndicator, ErrorIndicator } from '../../Components'

const BountiesScreen = () => {
  const dispatch = useDispatch()
  const { isLoading, error, bounties } = useSelector(selectBounties)
  console.log(isLoading, error, bounties)

  useEffect(() => {
    dispatch(fetchBounties())
  }, [dispatch])

  if (isLoading) {
    return <LoadingIndicator disabled={false} />
  }

  if (error) {
    return <ErrorIndicator onTryAgain={() => {}} errorMessage="Error Message" />
  }

  return <></>
}

export default BountiesScreen
