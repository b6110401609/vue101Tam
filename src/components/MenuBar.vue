<template>
  <div>
      <nav class="navbar navbar-expand navbar-light bg-light">
        <a class="navbar-brand" href="#">
            <img src="../assets/logo.png" width="30">
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
               <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/todo" class="nav-link">Todo</router-link>
            </li>
            <li class="nav-item" v-if="user">
                <router-link to="/logout" class="nav-link">Logout</router-link>
            </li>
            <li class="nav-item" v-if="!user">
                <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            </ul>
        </div>
        </nav>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    computed:{
        ...mapState('account', ['user'])
    }
}
</script>

<style>

</style>