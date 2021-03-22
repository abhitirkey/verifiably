<template>
  <div class="app_container">    
    <div class="logo">
        <LogoSVG/>
        <span class="erifiably">erifiably.</span>
    </div>

  <!-- <div class="IntroContainer" :class="{'fadeOutIntro' : Journey}">
    <p>This is what we do. This is how you'll benefit.</p>
    <button class="BeginBtn" @click="BeginJourney()">Begin the journey</button>
  </div> -->

  <!-- <Contact v-if="Journey" :Journey="Journey"/> -->
    <!-- <Header/> -->
    <!-- <transition name="view" appear enter-active-class="animate__animated animate__zoomInRight delay" leave-active-class="animate__animated animate__zoomOutLeft"> -->
      <!-- <router-view/> -->
    <!-- </transition> -->
  </div>
</template>

<script>
import LogoSVG from './assets/verifiably_check.vue'

export default {
  name: "App",
  components: {
    LogoSVG
  },
  data() {
    return {
      Journey: false
    }
  },
  methods: {
    BeginJourney() {
      this.Journey = true;
    }
  }
};
</script>

<style>
@import './classes/logo-Animations.css';

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
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 
.IntroContainer {
    opacity: 0;
    position: relative;
    text-align: center;
    top: 5rem;
    animation: fadeInRight 1s;
    animation-delay: 5s;
    animation-fill-mode: forwards;
    z-index: 100;
}

.IntroContainer > p {
  font-size: 2rem;
  color: rgb(165, 165, 165);
} */

/* .BeginBtn {
  margin-top: 1.5rem;
  background-color: transparent;
  color: gray;
  padding: 1rem;
  border-radius: 5px;
  text-transform: uppercase;
  border: none;
  box-shadow: 5px 5px 19px 0px #00000017;
}

.BeginBtn:focus {
  outline: none;
}

.BeginBtn:active {
  box-shadow: none;
}

.BeginBtn:hover {
  cursor: pointer;
}

.fadeOutIntro {
  opacity: 1;
  animation: fadeOutRight 1s;
  animation-fill-mode: forwards;
} */
</style>
