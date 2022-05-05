import { createSlice } from "@reduxjs/toolkit"
import { ReduxTasksState } from "../../enities/interfaces/redux-state"

const initialState: ReduxTasksState = {
  currentTasks: [],
  taskHistory: []
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask(state, action) {
      state.currentTasks.push(action.payload)
    },
    removeTask(state, action) {
      state.taskHistory.push(action.payload)
      state.currentTasks = state.currentTasks.filter(task => task !== action.payload)
    }
  }
})

export default tasksSlice.reducer
export const { addTask, removeTask } = tasksSlice.actions