import isFunction from 'lodash/lang/isFunction'

function filterForActions (actions) {
  const objectMap = actions.reduce((objectMap, actionType) => {
    objectMap[actionType] = true
    return objectMap
  }, {})
  
  return (action) => !!objectMap.[action]
}

// redux-ignore higher order reducer
export default function ignoreActions (reducer, actions = []) {
  let ignorePredicate = isFunction(actions)
    ? actions
    : filterForActions(actions)

  return (state, action) => {
    if (!ignorePredicate(action)) {
      return reducer(state, action)
    }

    return state
  }
}
// /redux-ignore
