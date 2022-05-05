export interface ReduxThemeState {
  theme: string,
}

export interface ReduxTasksState {
  currentTasks: string[],
  taskHistory: string[]
}

export interface ReduxState {
  theme: string,
  currentTasks: string[],
  taskHistory: string[]
}