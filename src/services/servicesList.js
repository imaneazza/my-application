import axios from 'axios'

export function getTodosforUser (userId) {
  return axios.get('https://jsonplaceholder.typicode.com/users/' + userId + '/todos')
}

export function getUserInformation (userId) {
  return axios.get('https://jsonplaceholder.typicode.com/users/' + userId)
}

export function addNewTodoItem (todo) {
  return axios.post('https://jsonplaceholder.typicode.com/todos', todo)
}
