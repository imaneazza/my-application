<template>
  <div>
    <div class="box" v-if="currentUser">
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
        <div class="flex-end">
          <button @click="showMore()"> {{ show ? 'Hide' : 'Show' }} More Data</button>
        </div>
        <div v-if="show">
          <div class="flex">
            <div class="w-50">
              <label>Phone Number : </label>
              <span>{{ currentUser.phone }}</span>
            </div>
            <div class="w-50">
              <label>Web Site : </label>
              <a :href="'http://'+currentUser.website" target="_blank" class="nolink">{{ currentUser.website }}</a>
            </div>
            <div class="w-30"></div>
          </div>
          <h5 class="header-info"> Company Informations</h5>
          <div class="">
            <div class="mt-1 centred">
              <label>Company Name : </label>
              <span>{{ currentUser.company.name }}</span>
            </div>
            <div class="mt-1 centred">
              <label>Company Catch Phrase : </label>
              <span>{{ currentUser.company.catchPhrase }}</span>
            </div>
            <div class="mt-1 centred">
              <label>BS : </label>
              <span>{{ currentUser.company.bs }}</span>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  name: 'UserInfo',
  data () {
    return {
      show: false
    }
  },
  methods: {
    showMore: function () {
      this.show = !this.show
    }
  },
  computed: {
    ...mapGetters([
      'currentUser'
    ])
  }
}
</script>
<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.flex-end {
  display: flex;
  justify-content: flex-end;
  margin-top: 5%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.w-30 {
  width: 30%;
}

.text-center {
  text-align: center;
}

.w-25 {
  width: 25%;
}

.w-50 {
  width: 50%;
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

.mt-1 {
  margin-top: 10px;
}

.nolink {
  text-decoration: none;
  color: darkblue;
}

.centred {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
</style>
