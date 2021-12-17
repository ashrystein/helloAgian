import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { reducers } from './Reducers'

const store = configureStore({
  reducer: combineReducers(reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export default store
