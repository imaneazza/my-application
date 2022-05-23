<template>
  <div>
    <div class="stylereverse">
      <a><router-link :to="{ name: 'todoList' }">Todos List</router-link></a>
      <a href="/user"><router-link :to="{ name: 'userList' }">User Information</router-link></a>
      <a href="/posts">Post and Comments </a>
    </div>
    <h2 style="margin-top: 10px">Todo List for the User {{ currentUser }}</h2>
    <ul>
      <li v-for="todo in todosList" :class="classTodo(todo.completed)" :key="todo.id" :title="todo.completed?'Completed TODO':'Remaining TODO'"> {{ todo.title }}</li>
    </ul>
  </div>

</template>
<script>

export default {
  name: 'TodoList',
  computed: {
    currentUser: function () {
      return this.$store.state.currentUser ? this.$store.state.currentUser.name : null
    },
    todosList: function () {
      return this.$store.state.todoList
    },


  },
  methods: {
    classTodo: function (completed) {
      return {
        completed: completed
      }
    }
  }
}
</script>
<style scoped>
.completed {
  color: green;
}
.stylereverse{
  width: 100%;
  text-align: right;
}
</style>
