<template>
  <div>
    <el-card shadow="never" class="my-card">
      <div slot="header" class="clearfix border-none">
        <span>Todo List for the User {{ currentUser }}</span>
        <el-button class="button-right" type="primary" @click="addTodoItem()">Add new Todo</el-button>
      </div>
      <el-alert
        title="Todo added Successfully !" v-if="showSuccess"
        type="success">
      </el-alert>
      <el-form :inline="true" :model="newEntry" class="demo-form-inline" v-if="showAddMenu">
        <el-form-item label="Title of the task">
          <el-input v-model="newEntry.title" placeholder="Title of the task" size="small"></el-input>
        </el-form-item>
        <el-form-item label="State">
          <el-switch v-model="newEntry.completed" active-text="Completed"
                     inactive-text="Remaining"></el-switch>
        </el-form-item>
        <el-form-item style="float: right">
          <el-button class="mx-3 button-right" type="primary" @click="ValidateEntry()">Validate</el-button>
          <el-button class="button-right" type="primary" @click="CancelEntry()">Cancel</el-button>

        </el-form-item>
      </el-form>
      <el-row :gutter="20">
        <el-col :span="6" v-for="item in todoList" :key="item.id">
          <el-card class="box-card my-2" :key="item.id" shadow="never">
            <span class="spanTitle w-100">{{ item.title }}</span>
            <span class="status w-100" :class="classTodo(item.completed)">{{
                item.completed ? 'completed' : 'Remaining'
              }}</span>
          </el-card>
        </el-col>

      </el-row>

    </el-card>

  </div>

</template>
<script>

import {mapGetters} from 'vuex'

export default {
  name: 'TodoList',
  computed: {
    ...mapGetters([
      'currentUser', 'todoList'
    ])

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
    ValidateEntry: function () {
      this.showAddMenu = false
      this.$store.dispatch('addTodoForUser', {
        todo: this.newEntry
      }).then(() => {
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

.button-right {
  float: right;
  padding: 6px
}

.box-card {
  height: 90px !important;
  padding: 6px !important;
}

</style>
