<template>
  <div id="app">
    <ul class="stylereverse">
      <li class="link">
        <router-link :to="{ name: 'todoList' }">Todos List</router-link>
      </li>
      <li class="link">
        <router-link :to="{ name: 'userList' }">User Information</router-link>
      </li>
      <li class="link">Post and Comments</li>
    </ul>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
* {
  font-size: 12px;
  font-family: "Calibri Light";
}

.stylereverse {
  width: 100%;
  background: #e5e5e5;
  height: 25px;
  display: flex;
  justify-content: flex-end;
  margin: 0 !important;
  padding:0!important;
}

.link {
  padding: 5px !important;
  vertical-align: middle;
  list-style: none;

}

.link:hover {
  background: #969696;
}

.link a {
  text-decoration: none;
  color: black;
}
.flex {
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
}
.flex-start {
  display: flex;
  justify-content: flex-start;
  margin-left: auto;
  margin-right: auto;
}
</style>
