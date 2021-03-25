<template>
  <div class="app_container">    
    <div class="logo full-logo-animation" :class="{'animateJourney' : Journey}">
        <LogoSVG/>
        <span class="erifiably">erifiably.</span>
        <span class="tagline">Because transparency matters</span>
    </div>

  <transition name="fadeIntro" appear>
    <div class="IntroContainer" v-if="!Journey">
      <p>This is what we do. This is how you'll benefit.</p>
      <button class="BeginBtn" @click="BeginJourney()">Begin the journey</button>
    </div>
  </transition>

  <Contact v-if="Journey" :Journey="Journey"/>
    <!-- <Header/> -->
    <!-- <transition name="view" appear enter-active-class="animate__animated animate__zoomInRight delay" leave-active-class="animate__animated animate__zoomOutLeft"> -->
      <!-- <router-view/> -->
    <!-- </transition> -->
  </div>
</template>

<script>
import LogoSVG from './assets/verifiably_check.vue'
import Contact from './components/Contact.vue'

export default {
  name: "App",
  components: {
    LogoSVG, Contact
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

.fadeIntro-enter-active {
  opacity: 0;
  animation: fadeInRight 1s;
  animation-delay: 3s;
  animation-fill-mode: forwards;
}

.fadeIntro-leave-active {
  animation: fadeOutRight 1s;
  animation-fill-mode: forwards;
}

.IntroContainer {
    position: relative;
    text-align: center;
    top: 5rem;
}

.IntroContainer > p {
  font-size: 2rem;
  color: rgb(165, 165, 165);
}

.BeginBtn {
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

@keyframes hideThis {
  to {
    display: none;
  }
}

</style>
