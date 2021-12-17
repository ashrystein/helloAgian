import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { reducers } from './Reducers'

const store = configureStore({
  reducer: combineReducers(reducers)
})

export default store
