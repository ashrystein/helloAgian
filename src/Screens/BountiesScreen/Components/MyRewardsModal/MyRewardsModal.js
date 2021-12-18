import React, { memo } from 'react'
import { Modal, Text, SafeAreaView, View, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import BountyCard from '../BountyCard/BountyCard'
import { rewardsSelectors } from '../../../../Redux/Reducers/Rewards'

import { testIds } from './MyRewardsModal.testIds'
import MyRewardsModalStyles from './MyRewardsModal.styles'

const MyRewardsModal = ({ isVisible, dismiss }) => {
  const { rewards } = useSelector(rewardsSelectors.selectRewards)

  const renderItem = ({ item, index }) => (
    <BountyCard
      item={item}
      testID={`${testIds.MyRewardsModal_List_Item}${index}`}
      showCollectBtn={false}
    />
  )

  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      testID={testIds.MyRewardsModal_Modal}
    >
      <SafeAreaView
        style={MyRewardsModalStyles.container}
        testID={testIds.MyRewardsModal_Container}
      >
        <View
          style={MyRewardsModalStyles.ContentWrapper}
          testID={testIds.MyRewardsModal_Wrapper}
        >
          <Text
            style={MyRewardsModalStyles.closeText}
            onPress={dismiss}
            testID={testIds.MyRewardsModal_CloseText}
          >
            Close
          </Text>
          <FlatList
            data={rewards}
            renderItem={renderItem}
            keyExtractor={(item) => item?.name}
            showsVerticalScrollIndicator={false}
            testID={testIds.MyRewardsModal_List}
            removeClippedSubviews={true}
            initialNumToRender={10}
            onEndReachedThreshold={0.5}
          />
        </View>
      </SafeAreaView>
    </Modal>
  )
}

MyRewardsModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  dismiss: PropTypes.func
}

export default memo(MyRewardsModal)
