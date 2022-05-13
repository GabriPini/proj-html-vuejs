import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faFacebookF, faInstagram, faYoutube, faTwitter} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add( faFacebookF, faInstagram, faYoutube, faTwitter)

Vue.component('font-awesome-icon', FontAwesomeIcon)


const bootstrap = require('bootstrap')
Vue.use(bootstrap)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
