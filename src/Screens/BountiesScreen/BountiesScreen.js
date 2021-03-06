import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView, FlatList, useWindowDimensions } from 'react-native'

import {
  bountiesActions,
  bountiesSelectors
} from '../../Redux/Reducers/Bounties'
import { LoadingIndicator, ErrorIndicator } from '../../Components'
import { Metrics } from '../../Theme'
import { en } from '../../i18n'

import BountiesStyles from './BountiesScreen.styles'
import { testIds } from './BountiesScreen.testIds'
import { BountyCard, MyRewardsModal, MyRewardsButton } from './Components'

const BountiesScreen = () => {
  const { height } = useWindowDimensions()
  const ListItemHeight = useMemo(
    () => height * Metrics.bountyCardHeight,
    [height]
  )
  const dispatch = useDispatch()
  const { isLoading, error, bounties } = useSelector(
    bountiesSelectors.selectBounties
  )
  const [bountiesList, setBountiesList] = useState([])
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [isRewardsVisible, setIsRewardsVisibility] = useState(false)

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
   * Show / Hide rewards modal
   */
  const handleMyRewardsVisibility = () => {
    setIsRewardsVisibility(!isRewardsVisible)
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
          errorMessage={en.Default_Error_Message}
        />
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={BountiesStyles.container}>
      <MyRewardsButton onPress={handleMyRewardsVisibility} />
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
        getItemLayout={(data, index) => ({
          length: ListItemHeight,
          offset: ListItemHeight * index,
          index
        })}
      />
      <MyRewardsModal
        isVisible={isRewardsVisible}
        dismiss={handleMyRewardsVisibility}
        ListItemHeight={ListItemHeight}
      />
    </SafeAreaView>
  )
}

export default BountiesScreen
