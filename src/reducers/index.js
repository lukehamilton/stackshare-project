import { combineReducers } from 'redux'
import {
  REQUEST_TAGS, RECEIVE_TAGS,
  REQUEST_TOOLS, RECEIVE_TOOLS
} from '../actions'

const tags = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_TAGS:
      return {
        state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_TAGS:
      return {
        state,
        isFetching: false,
        didInvalidate: false,
        items: action.tags,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const tools = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_TOOLS:
      return {
        state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_TOOLS:
      return {
        state,
        isFetching: false,
        didInvalidate: false,
        items: action.tools,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const toolsByTag = (state = { }, action) => {
  switch (action.type) {
    case RECEIVE_TOOLS:
    case REQUEST_TOOLS:
      return {
        state,
        [action.tag]: tools(state[action.tag], action)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  tags,
  tools
})

export default rootReducer
