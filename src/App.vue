<template>
  <!-- <div class="app_container">  -->  
  <!-- <Contact v-if="Journey" :Journey="Journey"/> -->
    <!-- <Header/> -->
    <!-- <transition mode="out-in" name="fade">
      <router-view :key="$route.path" />
    </transition>
  </div> -->
  <div class="app_container">
    <Header v-if="checkUrl() !== '/'"/>
    <transition mode="out in" enter-active-class="animate__animated animate__zoomIn" leave-active-class="animate__animated animate__zoomOut">
      <router-view :key="$route.path" />
    </transition>
  </div>
</template>

<script>

import Header from './components/Header.vue'
// import Intro from './components/LandingPage.vue'
// import Contact from './components/Contact.vue'

export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {
      Journey: false
    }
  },
  methods: {
    BeginJourney() {
      this.Journey = true;
    },
    checkUrl() {
      return window.location.pathname;
    }
  }
};
</script>

<style>

@import 'classes/global-classes.css';

* {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  box-sizing: border-box;
}

.app_container {
  overflow-x: hidden;
  overflow-y: hidden;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

/* This one emulates React.Fragment :P */

.fragment {
  display: contents;
  width: inherit;
  height: inherit;
  color: inherit;
  font-size: inherit;
}

.flex-spacer {
  flex: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* The following classes will be used in page components to keep the website horizontal: */

 .outer-wrapper {
    position: absolute;
    width: 100vh;
    height: 100vw;
    transform: rotate(-90deg) translateX(-100vh);
    transform-origin: top left;
    overflow-y: scroll;
    overflow-x: hidden;

    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .slide {
    width: 100vw;
    height: 100vh;
    /* To accomodate for the height of the navbar */
    padding-top: 6rem; 
  }

  .inner-wrapper {
    display: flex;
    transform: rotate(90deg) translateY(-100vh);
    transform-origin: top left;
    width: 400vw;
  }

/* Horizontal-izing classes end here */
</style>
