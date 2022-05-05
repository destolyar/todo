import { combineReducers, configureStore } from '@reduxjs/toolkit'
import themeSlice from './slices/themeSlice'
import tasksSlice from './slices/tasksSlice'

const rootReducer = combineReducers({
   themeSlice,
   tasksSlice
})

export const store = configureStore({
   reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>