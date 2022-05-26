import {createLocalVue, mount} from '@vue/test-utils'
import Vuex from 'vuex'
import {actions} from '../../../src/store/actions'
import {mutations} from '../../../src/store/mutations'
import UserInfo from "../../../src/components/userInfo";

const localVue = createLocalVue()
localVue.use(Vuex)
describe('userInfo.vue', () => {
  let wrapper
  let store
  beforeEach(() => {
    store = {
      state: {
        currentUser: null,
        todoList: []
      },
      actions,
      mutations
    }
    wrapper = mount(UserInfo, {
      computed: {
        currentUser: () => 'Test data ',
        todosList: () => [

          {
            'userId': 1,
            'id': 1,
            'title': 'delectus aut autem',
            'completed': false
          },
          {
            'userId': 1,
            'id': 2,
            'title': 'quis ut nam facilis et officia qui',
            'completed': false
          },
          {
            'userId': 1,
            'id': 3,
            'title': 'fugiat veniam minus',
            'completed': false
          }]
      },
      global: {
        provide: {
          store: store
        }
      }
    })
  })
  it('should be mounted', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper.exists()).toBe(true)
  })
  it(' should have proper value ', () => {
    expect(wrapper.vm.userId).toEqual(1)
    expect(wrapper.vm.showAddMenu).toEqual(false)
    expect(wrapper.vm.showSuccess).toEqual(false)
    expect(wrapper.vm.newEntry).toBeTruthy()
  })
  it('getCompleted Status ', () => {
    let completed = true
    expect(wrapper.vm.classTodo(completed)).toEqual({
      completed: true,
      remaining: false
    })
  })
  it('should change showAdd menu variable  ', () => {
    expect(wrapper.vm.showAddMenu).toEqual(false)
    wrapper.vm.addTodoItem()
    expect(wrapper.vm.showAddMenu).toEqual(true)
    wrapper.vm.CancelEntry()
    expect(wrapper.vm.showAddMenu).toEqual(false)
  })

})
