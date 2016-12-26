/**
 * @providesModule reducers
 */

import { combineReducers } from 'redux'

import { default as navigation } from './navigation'
import { default as common } from './common'

export default combineReducers({
  navigation,
  common
})