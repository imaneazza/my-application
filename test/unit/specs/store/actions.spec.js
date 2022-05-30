import {createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import {mutations} from '../../../../src/store/mutations'
import {getter} from '../../../../src/store/getter'
import {addNewTodoItem, getTodosforUser} from '../../../../src/services/servicesList'
import {actions} from '../../../../src/store/actions'

const localVue = createLocalVue()
localVue.use(Vuex)
jest.mock('../../../../src/services/servicesList')

describe('actions.js', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        currentUser: {
          'id': 1,
          'name': 'Leanne Graham',
          'username': 'Bret',
          'email': 'Sincere@april.biz',
          'address': {
            'street': 'Kulas Light',
            'suite': 'Apt. 556',
            'city': 'Gwenborough',
            'zipcode': '92998-3874',
            'geo': {
              'lat': '-37.3159',
              'lng': '81.1496'
            }
          },
          'phone': '1-770-736-8031 x56442',
          'website': 'hildegard.org',
          'company': {
            'name': 'Romaguera-Crona',
            'catchPhrase': 'Multi-layered client-server neural-net',
            'bs': 'harness real-time e-markets'
          }
        },
        todoList: []
      },
      mutations: mutations,
      getters: getter
    })
  })
  it(' should call proper actions ', async () => {
    const todos = []
    getTodosforUser.mockResolvedValue(todos)
    const commit = jest.fn()
    await actions.updateUser({commit}, {name: 'test'})
    expect(commit).toHaveBeenCalledWith('setUser', {name: 'test'})
  })
  it(' should call proper actions ', async () => {
    const todoAdded = {}
    addNewTodoItem.mockResolvedValue(todoAdded)
    getTodosforUser.mockResolvedValue([])
    const commit = jest.fn()
    await actions.addTodoForUser({commit}, {todo: 'test'})
  })
})
