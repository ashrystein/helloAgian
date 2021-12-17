import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'

import store from '../Redux/Store'
import { BountiesScreen } from '../Screens'

import { routes } from './Routes'

const Stack = createStackNavigator()

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        title: 'Bounties'
      }}
      name={routes.BountiesScreen}
      component={BountiesScreen}
    />
  </Stack.Navigator>
)

const AppNavigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default AppNavigation
