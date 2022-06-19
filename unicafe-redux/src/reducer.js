const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const plus = state.good + 1
      return {...state, good: plus}
    case 'OK':
      const neutral = state.ok + 1
      return {...state, ok: neutral}
    case 'BAD':
      const neg = state.bad + 1
      return {...state, bad: neg}
    case 'ZERO':
      return {good: 0, ok: 0, bad: 0}
    default: return state
  }
  
}

export default counterReducer