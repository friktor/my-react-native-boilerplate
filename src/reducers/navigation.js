import * as NavigationStateUtils from 'NavigationStateUtils'
import { handleActions } from 'redux-actions'
import { homePage } from 'configPages'

import {
  NAVIGATION_JUMP_TO_INDEX,
  NAVIGATION_JUMP_TO_KEY,
  NAVIGATION_RESET,
  NAVIGATION_PUSH,
  NAVIGATION_POP
} from 'constants'

const initialState = {
	routes: [homePage],
	index: 0
}

const reducer = handleActions({
  [NAVIGATION_JUMP_TO_INDEX]: (state, { payload }) => (NavigationStateUtils.jumpToIndex(state, payload)),
  
  [NAVIGATION_JUMP_TO_KEY]: (state, { payload }) => (NavigationStateUtils.jumpTo(state, payload)),

  [NAVIGATION_PUSH]: (state, { payload }) => {
		if (state.routes[state.index].key === (payload && payload.key)) return state
    return NavigationStateUtils.push(state, payload)
  },

  [NAVIGATION_POP]: (state, { payload }) => {
		if (state.index === 0 || state.routes.length === 1) return state
    return NavigationStateUtils.pop(state)
  },

  [NAVIGATION_RESET]: (state, { payload }) => ({
    ...state,
    ...payload
  })
}, initialState)

export default reducer