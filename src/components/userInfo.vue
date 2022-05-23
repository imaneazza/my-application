<template>
  <div>
    <div class="box">
      <div class="flex">
        <div class=" w-30">
          <label>Name : </label>
          <span>{{ currentUser.name }}</span>
        </div>
        <div class=" w-30">
          <label>UserName : </label>
          <span>{{ currentUser.username }}</span>
        </div>
        <div class=" w-30">
          <label>Email : </label>
          <span>{{ currentUser.email }}</span>
        </div>
      </div>
      <div>
        <h5 class="header-info">Address Information</h5>
        <div class="flex">
          <div class="w-25">
            <label>Street : </label>
            <span>{{ currentUser.address.street }}</span>
          </div>
          <div class="w-25">
            <label>Suite : </label>
            <span>{{ currentUser.address.suite }}</span>
          </div>
          <div class="w-25">
            <label>City : </label>
            <span>{{ currentUser.address.city }}</span>
          </div>
          <div class="w-25">
            <label>zipcode : </label>
            <span>{{ currentUser.address.zipcode }}</span>
          </div>
        </div>
        <div class="flex">
          <div class="w-30 text-center">
            <input type="text" :value="currentUser.address.geo.lat" disabled>
          </div>
          <div class="w-30 text-center">
            <input type="text" :value="currentUser.address.geo.lng" disabled>
          </div>
        </div>
        <div class="flex">

        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'UserInfo',
  computed: {
    currentUser: function () {
      return this.$store.state.currentUser
    }
  }
}
</script>
<style>
.flex {
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.w-30 {
  width: 50%;
}

.text-center {
  text-align: center;
}

.w-25 {
  width: 25%;
}

.box {
  border: 1px solid black;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  height: 50vh;
  margin-top: 25vh;
}

.header-info {
  font-size: 13px;
  margin-top: 2px;
  margin-bottom: 2px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
</style>
