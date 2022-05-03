import { createStore } from 'redux'
import { ReduxState } from './enities/interfaces/redux-state'

const defaultState: ReduxState = {
  theme: 'Light',
  currentTasks: []
}

const reducer = (state = defaultState, action: {type: string, payload: string}) => {
  switch(action.type) {
    case 'CHANGE_THEME':
      return {...state, theme: action.payload}
    case 'ADD_TASK':
      return {...state, currentTasks: [...state.currentTasks, action.payload]}
    default:
      return state
  }
}

export const store = createStore(reducer)