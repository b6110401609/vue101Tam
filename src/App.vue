<template>
  <div class="container">
    <menu-bar></menu-bar>

    <div v-if="alert.message" :class="`alert ${alert.type}`">
      {{alert.message}}
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Counter from './components/Counter.vue'
import MenuBar from './components/MenuBar.vue'

export default {
  name: 'app',
  computed : {
    ...mapState({
      alert: state => state.alert
    })
  },
  methods: {
    ...mapActions({
      clearAlert: 'alert/clear'
    })
  },
  components : {
    Counter,
    MenuBar
  },
  watch: {
    $route (to, from){
      this.clearAlert()
    }
  }
}
</script>

<style>

</style>
