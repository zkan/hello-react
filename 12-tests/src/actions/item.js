import { ADD_ITEM } from './types'

const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
})

export {
  addItem,
}
