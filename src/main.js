import Vue from "vue";
import App from "./App.vue";

import VueRouter from 'vue-router'
import Vue2TouchEvents from 'vue2-touch-events'

import LandingPage from './pages/LandingPage.vue'
import Home from './pages/Home/Home.vue'
import Contact from './pages/Contact.vue'
import Test1 from './pages/Test1.vue'
import Test2 from './pages/Test2.vue'
import Test from './pages/Test.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faCaretLeft, faCaretRight, faPaperPlane, faCaretUp, faCaretDown, faFireExtinguisher } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faCaretLeft, faCaretRight, faCaretUp, faCaretDown, faPaperPlane, faFireExtinguisher)


const Fragment = {
  functional: true,
  render: (h, ctx) => ctx.children
};

Vue.component('fragment', Fragment);
Vue.component('font-awesome-icon', FontAwesomeIcon);

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
    component: LandingPage
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/test',
    component: Test
  },
  {
    path: '/test1',
    component: Test1
  },
  {
    path: '/test2',
    component: Test2
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
