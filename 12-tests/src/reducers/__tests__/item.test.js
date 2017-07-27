import { ADD_ITEM } from '../../actions/types'
import itemReducer from '../item'

describe('itemReducer', () => {
  it('should add new item when receiving addItem action', () => {
    const curState = []

    const action = {
      type: ADD_ITEM,
      payload: 'Clean room'
    }

    const nextState = itemReducer(curState, action)
    const expectedState = ['Clean room']
    expect(nextState).toEqual(expectedState)
  })
})
