<template>
  <div>
    <h1>{{ title }}</h1>

    <div class="jumbotron" v-if="user">
      <h4 class="display-6">
        Welcome {{user.displayName}}
      </h4>
    </div>

    <counter :initial="10"></counter>
    <counter :initial="20"></counter>
    <counter></counter>
    <router-link to="/about">Contact Me</router-link>
  </div>
</template>

<script>
import Counter from '../components/Counter'
import {mapState, mapActions} from 'vuex'

export default {
  data() {
    return {
      title: 'Home Page'
    }
  },
  computed:{
    ...mapState('account', ['user'])
  },
  components: {
    Counter
  }
}
</script>

<style>

</style>