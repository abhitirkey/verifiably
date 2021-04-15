import Vue from "vue";
import App from "./App.vue";

import VueRouter from 'vue-router'
import Vue2TouchEvents from 'vue2-touch-events'

import LandingPage from './pages/LandingPage.vue'

import ImageLazy from './components/ImageLazy.vue'

import IntersectionObserver from 'intersection-observer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUndo, faAngleLeft, faAngleRight, faAngleUp, faAngleDown, faCoffee, faCaretLeft, faCaretRight, faPaperPlane, faCaretUp, faCaretDown, faFireExtinguisher, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUndo, faAngleLeft, faAngleRight, faAngleUp, faAngleDown, faCoffee, faCaretLeft, faCaretRight, faCaretUp, faCaretDown, faPaperPlane, faFireExtinguisher, faBars, faTimes)


const Fragment = {
  functional: true,
  render: (h, ctx) => ctx.children
};

// IntersectionObserver.prototype.POLL_INTERVAL = 100;

Vue.component('fragment', Fragment);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('img-lazy', ImageLazy);

Vue.use(Vue2TouchEvents);
Vue.use(VueRouter);
Vue.use(IntersectionObserver);
Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    isMobile() {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      if( vw < 768 ) {
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
    component: () => import(/* webpackPrefetch: true */ './pages/Home/Home.vue')
  },
  {
    path: '/technology',
    component: () => import(/* webpackPrefetch: true */ './pages/Technology/Technology.vue')
  },
  {
    path: '/contact',
    component: () => import(/* webpackPrefetch: true */ './pages/Contact.vue')
  }
];

const router = new VueRouter({
  routes,
  mode: 'history',
  // scrollBehavior() {
  //   document.getElementById('app').scrollIntoView();
  // } 
});

// new Vue({  router,  store,  render: h => h(App),}).$mount('#app');

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
