export const mutations = {
  setUser (state, newUser) {
    state.currentUser = newUser
  },
  setTodos (state, todos) {
    state.todoList = todos
  }
}
