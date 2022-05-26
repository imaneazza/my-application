export const getter = {
  currentUser (state) {
    return state.currentUser ? state.currentUser.name : null
  },
  todoList (state) {
    return state.todoList
  }
}
