import TodoList from '../../../../src/components/todoList'
import {createLocalVue, mount} from '@vue/test-utils'
import Vuex from 'vuex'
import {mutations} from '../../../../src/store/mutations'

const localVue = createLocalVue()
localVue.use(Vuex)
jest.useFakeTimers()

describe('todoList.vue', () => {
  let wrapper
  let store
  let actions = {
    addTodoForUser: jest.fn()
  }
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        currentUser: null,
        todoList: []
      },
      actions: actions,
      mutations: mutations,
      getters: {
        todoList () {
          return [

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
        currentUser () {
          return 'This is a test CurrentUser'
        }
      }
    })
    console.log(store.actions)

    wrapper = mount(TodoList, {
      localVue, store
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
    expect(wrapper.vm.currentUser).toEqual(store.getters.currentUser)
    expect(wrapper.vm.todoList).toEqual(store.getters.todoList)
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
  it('should call the add Todo Event ', () => {
    wrapper.vm.ValidateEntry()
    expect(wrapper.vm.showAddMenu).toEqual(false)
    expect(actions.addTodoForUser).toBeCalled()
    expect(wrapper.vm.showSuccess).toEqual(false)
    jest.advanceTimersByTime(4000)
    expect(wrapper.vm.showSuccess).toEqual(false)
  })
})
