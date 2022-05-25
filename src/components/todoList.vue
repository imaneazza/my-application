<template>
  <div>

    <h2 class="center-header">Todo List for the User {{ currentUser }}</h2>
    <span v-if="showSuccess" class="completed"> Todo added Successfully ! </span>
    <div class="operations">
      <form class="flex-start w-80" v-if="showAddMenu">
        <div class="w-30" style="margin-right: 20px">
          <label for="titleEntry"> Title of the task</label>
          <input type="text" v-model="newEntry.title" required id="titleEntry">
        </div>
        <div class="w-30">
          <label for="completed">state</label>
          <input type="checkbox" v-model="newEntry.completed" id="completed">
        </div>

      </form>
      <button @click="addTodoItem()" v-if="!showAddMenu">Add new Todo</button>
      <button @click="validateEntry()" v-if="showAddMenu" class="mx-1">Validate</button>
      <button @click="CancelEntry()" v-if="showAddMenu">Cancel</button>
    </div>


    <div v-for="item in todosList" :key="item.id" class="w-25 div-inline">
      <span class="spanTitle w-100">{{ item.title }}</span>
      <span class="status w-100" :class="classTodo(item.completed)">{{
          item.completed ? 'completed' : 'Remaining'
        }}</span>
    </div>
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
    }
  },
  data () {
    return {
      userId: 1,
      showAddMenu: false,
      showSuccess: false,
      newEntry: {
        userId: this.userId,
        title: null,
        completed: false
      }
    }
  },
  methods: {
    classTodo: function (completed) {
      return {
        completed: completed,
        remaining: !completed
      }
    },
    addTodoItem: function () {
      this.showAddMenu = true
    },
    validateEntry: function () {
      this.showAddMenu = false
      this.$store.dispatch('addTodoForUser', {
        todo: this.newEntry
      }).then(data => {
        this.showSuccess = true
        setTimeout(() => {
            this.showSuccess = false
          }, 4000
        )
      })
    },
    CancelEntry: function () {
      this.showAddMenu = false
    }
  }
}
</script>
<style scoped>
.completed {
  color: green;
}

.remaining {
  color: orange;
}

.div-inline {
  display: inline-block;
  border: 1px solid darkgray;
  margin: 5px 2%;
  padding: 5px;
}

.w-100 {
  width: 100%;
}

.spanTitle {
  display: block;
  font-weight: 600;
  font-size: 13px;
  color: #127bab;
}

.status {
  text-align: right;
  display: block;
  margin: 5px 2px
}

.w-25 {
  width: 25%;
}

.center-header {
  text-align: center;
  font-weight: 600;
  font-size: 14px;
}

.operations {
  text-align: right;
  width: 75%;
  margin: 3px auto;
  display: flex;
  justify-content: flex-end;
}

.mt-1 {
  margin-top: 10px;
}

.mx-1 {
  margin-left: 5px;
  margin-right: 5px;
}

.w-80 {
  width: 80%;

}
</style>
