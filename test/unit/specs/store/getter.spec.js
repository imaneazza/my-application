import {createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import {getter} from '../../../../src/store/getter'
import {mutations} from '../../../../src/store/mutations'

const localVue = createLocalVue()
localVue.use(Vuex)
jest.useFakeTimers()

describe('getter.js', () => {
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
  it(' should have proper value ', () => {
    expect(store.getters.currentUser).toEqual('Leanne Graham')
    expect(store.getters.fullUser).toBeTruthy()
    expect(store.getters.todoList).toBeTruthy()
    let store2 = new Vuex.Store({
      state: {
        currentUser: null,
        todoList: []
      },
      mutations: mutations,
      getters: getter
    })
    expect(store2.getters.currentUser).toBeNull()
  })
})
