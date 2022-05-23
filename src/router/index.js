import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '../components/todoList'
import UserInfo from '../components/userInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: TodoList,
      name: 'home'
    },
    {
      path: '/todos',
      name: 'todoList',
      component: TodoList
    },
    {
      path: '/user',
      name: 'userList',
      component: UserInfo
    }
  ]
})
