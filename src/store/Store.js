import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentUser: null,
    todoList: []
  },
  mutations: {
    setUser (state, newUser) {
      state.currentUser = newUser
    },
    setTodos (state, todos) {
      state.todoList = todos
    }
  },
  actions: {
    updateUser (context, payload) {
      context.commit('setUser', payload)
      axios.get('https://jsonplaceholder.typicode.com/todos?userId=1').then(todos => {
        context.commit('setTodos', todos.data)
      })
    }
  }
})
