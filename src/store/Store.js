import Vuex from 'vuex'
import Vue from 'vue'
import {addNewTodoItem, getTodosforUser} from '../services/servicesList'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentUser: null,
    todoList: []
  },
  mutations: {
    setUser(state, newUser) {
      state.currentUser = newUser
    },
    setTodos(state, todos) {
      state.todoList = todos
    }
  },
  actions: {
    updateUser(context, payload) {
      context.commit('setUser', payload)
      getTodosforUser(1).then(todos => {
        context.commit('setTodos', todos.data)
      })
    },
    addTodoForUser(context, payload) {
      addNewTodoItem(payload.todo).then(todos => {
        getTodosforUser(1).then(todos => {
          context.commit('setTodos', todos.data)

        })
      })
    }
  }
})
