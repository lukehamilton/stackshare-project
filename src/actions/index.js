export const REQUEST_TAGS = 'REQUEST_TAGS'
export const RECEIVE_TAGS = 'RECEIVE_TAGS'
export const REQUEST_TOOLS = 'REQUEST_TOOLS'
export const RECEIVE_TOOLS = 'RECEIVE_TOOLS'

export const requestTags = () => ({
  type: REQUEST_TAGS
})

export const receiveTags = (json) => ({
  type: RECEIVE_TAGS,
  tags: json.map(item => item),
  receivedAt: Date.now()
})

export const requestTools = tag => ({
  type: REQUEST_TOOLS,
  tag
})

export const receiveTools = (tag, json) => ({
  type: RECEIVE_TOOLS,
  tag,
  tools: json.map(child => child),
  receivedAt: Date.now()
})

export const fetchTags = () => (dispatch, getState) => {
  dispatch(requestTags())
  return  fetch('/api/tags')
    .then(response => response.json())
    .then(json => dispatch(receiveTags(json)))
}

export const fetchTools = tag => dispatch => {
  dispatch(requestTools(tag))
  return fetch(`/api/tags/${tag}/tools`)
    .then(response => response.json())
    .then(function(json)  {
      dispatch(receiveTools(tag, json[0].tools))
    })
}
