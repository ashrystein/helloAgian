import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView, FlatList } from 'react-native'

import {
  bountiesActions,
  bountiesSelectors
} from '../../Redux/Reducers/Bounties'

import { LoadingIndicator, ErrorIndicator } from '../../Components'

import BountiesStyles from './BountiesScreen.styles'
import { testIds } from './BountiesScreen.testIds'
import { BountyCard } from './Components'

const BountiesScreen = () => {
  const dispatch = useDispatch()
  const { isLoading, error, bounties } = useSelector(
    bountiesSelectors.selectBounties
  )
  const [bountiesList, setBountiesList] = useState([])
  const [isRefreshing, setIsRefreshing] = useState(false)

  /**
   *
   * Handle fetching bounties data
   */
  const handleFetchBounties = useCallback(() => {
    dispatch(bountiesActions.fetchBounties())
  }, [dispatch])

  /**
   *
   * Handle pull to refresh
   */
  const handleOnRefresh = () => {
    setIsRefreshing(true)
    handleFetchBounties()
  }

  /**
   *
   * Fetching bounties data once screen mounted
   */
  useEffect(() => {
    handleFetchBounties()
  }, [handleFetchBounties])

  /**
   *
   * Listen to bounties list change to update the list
   */
  useEffect(() => {
    bounties && setBountiesList(bounties)
    setIsRefreshing(false)
  }, [bounties])

  const renderItem = ({ item, index }) => {
    return (
      <BountyCard
        item={item}
        testID={`${testIds.Bounties_List_Item}${index}`}
      />
    )
  }

  if (isLoading && !isRefreshing) {
    return <LoadingIndicator disabled={false} />
  }

  if (error) {
    return (
      <SafeAreaView style={BountiesStyles.container}>
        <ErrorIndicator
          onTryAgain={() => handleFetchBounties()}
          errorMessage="Some thing wet wrong. Try again"
        />
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={BountiesStyles.container}>
      <FlatList
        data={bountiesList}
        renderItem={renderItem}
        keyExtractor={(item) => item?.name}
        showsVerticalScrollIndicator={false}
        testID={testIds.Bounties_List_Wrapper}
        refreshing={isRefreshing}
        onRefresh={handleOnRefresh}
        removeClippedSubviews={true}
        initialNumToRender={10}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  )
}

export default BountiesScreen
