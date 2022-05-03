import { createStore } from 'redux'

const defaultState = {
  theme: 'Light'
}

const reducer = (state = defaultState, action: {type: string, payload: string}) => {
  switch(action.type) {
    case 'CHANGE_THEME':
      return {...state, theme: action.payload}
    default:
      return state
  }
}

export const store = createStore(reducer)