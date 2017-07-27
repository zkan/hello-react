import { ADD_ITEM } from '../actions/types'

const initialState = []

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const newItem = action.payload
      return [
        ...state,
        newItem,
      ]
    }
    default: {
      return state
    }
  }
}

export default itemReducer
