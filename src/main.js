import Vue from 'vue'
import { router } from './routes'       
import VueMoment from 'vue-moment'
import { firestorePlugin } from 'vuefire'
import {store} from './stores'
                
Vue.use(VueMoment)
Vue.use(firestorePlugin)

import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store                            
})
