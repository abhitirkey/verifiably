<template>
    <div class="landingPage__container">
        <div class="logo full-logo-animation" :class="{'animateJourney' : Journey}">
            <LogoSVG/>
            <span class="erifiably">erifiably.</span>
            <span class="tagline">Because transparency matters</span>
        </div>

        <transition name="fadeIntro" appear>
        <div class="IntroContainer" v-if="!Journey">
            <p>This is what we do. This is how you'll benefit.</p>
            <router-link to="/home">Begin the Journey</router-link>
        </div>
        </transition>
    </div>
</template>

<script>

import LogoSVG from '../assets/verifiably_check.vue'

export default {
    name: 'LandingPage',
    components: { LogoSVG }
}

</script>

<style scoped>

@import '../classes/logo-Animations.css';

.landingPage__container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
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
  margin-bottom: 2rem;
}

.IntroContainer > a {
  background-color: transparent;
  color: gray;
  padding: 1rem;
  border-radius: 5px;
  text-transform: uppercase;
  border: none;
  box-shadow: 5px 5px 19px 0px #00000017;
  text-decoration: none;
}

.IntroContainer > a:focus {
  outline: none;
}

.IntroContainer > a:active {
  box-shadow: none;
}

@keyframes hideThis {
  to {
    display: none;
  }
}

</style>