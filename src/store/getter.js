export const getter = {
  currentUser (state) {
    return state.currentUser ? state.currentUser.name : null
  },
  fullUser (state) {
    return state.currentUser
  },
  todoList (state) {
    return state.todoList
  }
}
