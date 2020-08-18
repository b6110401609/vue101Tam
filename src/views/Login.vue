<template>
  <div>
      <h1>Login</h1>

      <form @submit.prevent="handleSubmit()">
        <div class="form-group">
          <label for="">Email Address*</label>
          <input type="text" class="form-control"
          placeholder="Your Email*" v-model="form.email">
        </div>
        <div class="form-group">
          <label for="">Password</label>
          <input type="password" class="form-control"
          placeholder="Your Password*" v-model="form.password">
        </div>
        
        <div class="form-group">
          <button class="btn btn-primary">Login</button>
          <router-link :to="{name: 'Register'}"
          class="btn btn-link">
            Register
          </router-link>
        </div>
      </form>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  data(){
    return {
      form:{
        email: '',
        password: ''
      }
    }
  },
  methods:{
    ...mapActions('account',['login']),
    ...mapActions('alert', ['error']),
    handleSubmit(e){
      if(this.form.email && this.form.password){
        this.login(this.form)
      }
    }
  }
}
</script>

<style>

</style>