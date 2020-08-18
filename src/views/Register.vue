<template>
  <div>
      <h1>Register</h1>

      <form @submit.prevent="handleSubmit()">
          <div class="form-group">
              <label for="">Email Address *</label>
              <input type="text" class="form-control"
              placeholder="Your Email *" v-model="form.email">
          </div>
          <div class="form-group">
              <label for="">Password *</label>
              <input type="password" class="form-control"
              placeholder="Your password *" v-model="form.password">
          </div>
          <div class="form-group">
              <label for="">Display Name *</label>
              <input type="text" class="form-control"
              placeholder="Your Name *" v-model="form.displayName">
          </div>
          <div class="form-group">
              <button class="btn btn-primary">
                  Register
              </button>
          </div>
      </form>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default{
    data(){
        return {
            form:{
                email: '',
                password: '',
                displayName: ''
            }
        }
    },
    methods: {
        ...mapActions('account', ['register']),
        ...mapActions('alert', ['error']),
        handleSubmit(){
            if(this.form.email && this.form.password && this.form.displayName){
                this.register(this.form)
            }else{
                this.error('All field are required')
            }
        }
    }
}
</script>
<style>

</style>