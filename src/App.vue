<template>
  <div class="app_container" @wheel="ScrollHandler">
    <!-- <Header v-if="checkUrl() !== '/'"/> -->
    <Header/>
    <ScrollButton type="left" :class="{'visible' : currentSection > 1}" :sectionID="'#section'+(currentSection-1)" @click.native="goToPreviousSection"/>
    <transition mode="out-in" enter-active-class="animate__animated animate__zoomInDown pageEnter" leave-active-class="animate__animated animate__zoomOut pageLeave">
      <router-view v-if="windowActive" :key="$route.path" @scrollToNext="goToNextSection"/>
    </transition>
    <ScrollButton type="right" :class="{'visible' : currentSection < totalSections}" :sectionID="'#section'+(currentSection+1)" @click.native="goToNextSection"/> 
  </div>
</template>

<script>
import EventBus from '@/event-bus' // To listen to events triggered from sub components
import Header from './components/Header.vue'
import ScrollButton from './components/ScrollButton.vue'

export default {
  name: "App",
  components: {
    Header, ScrollButton
  },
  data() {
    return {
      Journey: false,
      currentSection: 0,
      totalSections: 0,
      pagesWithPointers: [{
        page: '/',
        totalSections: 3
      }],
      doScroll: false,
      windowScrolled: false,
      windowScrollling: true,
      windowActive: false // For loading page contents when only the window/tab is active
    }
  },
  methods: {
    BeginJourney() {
      this.Journey = true;
    },
    checkUrl() {
      return window.location.pathname;
    },
    goToPreviousSection() {
      this.currentSection--;
      document.getElementById('section'+this.currentSection).scrollIntoView();
      this.showScrollButtons();
    },
    goToNextSection() {
      this.currentSection++;
      document.getElementById('section'+this.currentSection).scrollIntoView();
      this.showScrollButtons();
    },
    ScrollHandler(event){
      event.preventDefault();
        this.windowScrolling = true;
        clearTimeout(this.doScroll);
        this.doScroll = setTimeout(()=> {
            this.windowScrolled = true;

            console.log("wheelDelta (chrome): ", event.wheelDelta);
            console.log("delta firefox", event.deltaY);

            // event.wheelDelta detects mouse wheel event direction on Chrome, event.deltaY detects it on Firefox

            if ((event.wheelDelta >= 0 || event.deltaY < 0) && this.currentSection > 1) {
                this.goToPreviousSection();
            }
            else if((event.wheelDelta < 0 || event.deltaY >= 0) && this.currentSection < this.totalSections){
                this.goToNextSection();
            }

            this.windowScrolling = false;
        }, 100);
    },
    showScrollButtons() {
      // Show scroll buttons after every time the page is scrolled
        let scrollButtons = document.querySelectorAll('.scrollButton');
        scrollButtons.forEach(button => {
          button.classList.add('showScrollButton');
          setTimeout(() => button.classList.remove('showScrollButton'), 1000);
        });
    }
  },
  watch: {
    '$route': function(/*to, from*/){
        const currentPage = window.location.pathname;
        let pointerPageFound = false;
        this.pagesWithPointers.forEach(pointerPage => {
          if(pointerPage.page === currentPage){
            pointerPageFound = true;
            this.totalSections = pointerPage.totalSections;
            this.currentSection = 1;
          }
        })

        if(!pointerPageFound){
          this.totalSections = 0;
          this.currentSection = 0;
        }

      console.log("currentSection: "+this.currentSection);
      console.log("totalSections: "+this.totalSections);
    }
  },
  beforeCreate(){

  },
  mounted() {
    if(document.hasFocus()){
      this.windowActive = true;
    }
    window.addEventListener('focus', () => {
      this.windowActive = true;
    })

    EventBus.$on('scrollToNext', () => {
        // handle event triggered from subcomponent
        this.goToNextSection();
      })
    
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

.row {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

.col {
  display: flex;
  flex-direction: column;
}

.section {
   padding: 3rem 0;
}

.delay {
  /* For transition delays */
  animation-delay: 0.7s;
}

@media only screen and (min-width: 768px) {
    .row {
      flex-direction: row;
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

  .section {
    width: 100vw;
    height: 100vh;
    /* To accomodate for the height of the navbar */
    padding: 6rem 0 0 0; 
  }

  .inner-wrapper {
    display: flex;
    transform: rotate(90deg) translateY(-100vh);
    transform-origin: top left;
  }

  /* Horizontal-izing classes end here */
}

.pageEnter, .pageLeave {
  animation-duration: 0.5s;
}

</style>
