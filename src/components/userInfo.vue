<template>
  <div>
    <div class="box" v-if="fullUser">
      <div class="flex">
        <div class=" w-30">
          <label>Name : </label>
          <span>{{ fullUser.name }}</span>
        </div>
        <div class=" w-30">
          <label>UserName : </label>
          <span>{{ fullUser.username }}</span>
        </div>
        <div class=" w-30">
          <label>Email : </label>
          <span>{{ fullUser.email }}</span>
        </div>
      </div>
      <div>
        <h5 class="header-info">Address Information</h5>
        <div class="flex" v-if="fullUser.address">
          <div class="w-25">
            <label>Street : </label>
            <span>{{ fullUser.address.street }}</span>
          </div>
          <div class="w-25">
            <label>Suite : </label>
            <span>{{ fullUser.address.suite }}</span>
          </div>
          <div class="w-25">
            <label>City : </label>
            <span>{{ fullUser.address.city }}</span>
          </div>
          <div class="w-25">
            <label>zipcode : </label>
            <span>{{ fullUser.address.zipcode }}</span>
          </div>
        </div>
        <div class="flex" v-if="fullUser.address">
          <div class="w-30 text-center">
            <input type="text" :value="fullUser.address.geo.lat" disabled>
          </div>
          <div class="w-30 text-center">
            <input type="text" :value="fullUser.address.geo.lng" disabled>
          </div>
        </div>
        <div class="flex-end">
          <button @click="showMore()"> {{ show ? 'Hide' : 'Show' }} More Data</button>
        </div>
        <div v-if="show">
          <div class="flex">
            <div class="w-50">
              <label>Phone Number : </label>
              <span>{{ fullUser.phone }}</span>
            </div>
            <div class="w-50">
              <label>Web Site : </label>
              <a :href="'http://'+fullUser.website" target="_blank" class="nolink">{{ fullUser.website }}</a>
            </div>
            <div class="w-30"></div>
          </div>
          <h5 class="header-info"> Company Informations</h5>
          <div v-if="fullUser.company">
            <div class="mt-1 centred">
              <label>Company Name : </label>
              <span>{{ fullUser.company.name }}</span>
            </div>
            <div class="mt-1 centred">
              <label>Company Catch Phrase : </label>
              <span>{{ fullUser.company.catchPhrase }}</span>
            </div>
            <div class="mt-1 centred">
              <label>BS : </label>
              <span>{{ fullUser.company.bs }}</span>
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
      'fullUser'
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
