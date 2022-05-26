import {addNewTodoItem, getTodosforUser} from '../services/servicesList'

export const actions = {
  updateUser (context, payload) {
    context.commit('setUser', payload)
    getTodosforUser(1).then(todos => {
      context.commit('setTodos', todos.data)
    })
  },
  addTodoForUser (context, payload) {
    addNewTodoItem(payload.todo).then(todos => {
      getTodosforUser(1).then(todos => {
        context.commit('setTodos', todos.data)
      })
    })
  }
}
