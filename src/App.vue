<template>

  <div id="app">
    <el-container>
      <el-header>
        <div class="w-50">
          <img src="./assets/logosrh.png" style="height: 48px" alt="logo image">
        </div>
        <ul class="stylereverse w-50">
          <li class="link">
            <router-link :to="{ name: 'todoList' }">Todos List</router-link>
          </li>
          <li class="link">
            <router-link :to="{ name: 'userList' }">User Information</router-link>
          </li>
        </ul>
      </el-header>
      <el-container>
        <el-container>
          <el-main>
            <router-view/>
          </el-main>
          <el-footer>
            <div class="text-center">Copiright Reserved CEGEDIM SRH 2022</div>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>

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
  height: 25px;
  display: flex;
  justify-content: flex-end;
  margin: 0 !important;
  padding: 0 !important;
  color: white;
}

.link {
  padding: 5px !important;
  vertical-align: middle;
  list-style: none;

}

.link:hover a {
  font-weight: 600;
  font-size: 15px;
}

.link a {
  font-size: 14px;
  text-decoration: none;
  color: white;
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

.el-header {
  display: flex;
  height: 50px !important;
  background-color: rgb(84, 126, 199);
  color: #333;
  line-height: 25px;
  text-align: left !important;
}

.w-50 {
  width: 50%;
}
</style>
