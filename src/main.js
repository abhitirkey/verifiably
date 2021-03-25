import Vue from "vue";
import App from "./App.vue";

import VueRouter from 'vue-router'
import Vue2TouchEvents from 'vue2-touch-events'

import Home from './components/Home.vue'
import Contact from './components/Contact.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faCaretLeft, faCaretRight, faPaperPlane, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faCaretLeft, faCaretRight, faCaretUp, faCaretDown, faPaperPlane)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Vue2TouchEvents);
Vue.use(VueRouter);
Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    isMobile() {
      if( screen.width <= 760 ) {
          return true;
      }
      else {
          return false;
      }
    },
  },
})

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/contact',
    component: Contact
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

// new Vue({  router,  store,  render: h => h(App),}).$mount('#app');

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
