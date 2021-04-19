<template>
    <div class="section two">
        <div class="row row1">
            <div class="col col1" data-animation="fadeInDown">
            <span class="boldText" style="font-size: 1.2rem;">THE CHALLENGE</span>
            <h1>How Data Ecosystems are broken today</h1>
            <p>Vast amounts of data stored by enterprises are inaccessible and un-monetized due to privacy concerns, operational complexity and regulations.</p>
            <p>Step 3 is where the trouble starts. Because the data must be replicated for use, a host of problems are introduced.</p>
            </div>
            <div class="col col2" data-animation="fadeInUp">
                <!-- <div class="ChallengeDiagramDIV"> -->
                    <!-- <div v-if="dataUrl" :style="{ background }" class="ChallengeDiagramPlaceHolder"></div> -->
                    <!-- <img id="ChallengeDiagramID" src="./ChallengeDiagramPlaceholder.png" class="ChallengeDiagram"/> -->
                    <h2 class="SliderLeftQuote"><font-awesome-icon icon="quote-left"/></h2>
                    <div class="imageSlider">
                        <transition appear enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
                            <LinkPreview v-show="currentSlide === 1" key="slide1" linkUrl="https://finance.yahoo.com/news/twitter-ceo-jack-dorsey-we-can-do-more-to-provide-algorithmic-transparency-190416046.html"/>   
                            <!-- <LinkPreview v-show="currentSlide === 2" key="slide2" linkUrl="https://techcrunch.com/2021/04/14/building-customer-first-relationships-in-a-privacy-first-world-is-critical/?guccounter=1"/>    -->
                        </transition>
                        <transition appear enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
                            <!-- <LinkPreview v-show="currentSlide === 1" key="slide1" linkUrl="https://finance.yahoo.com/news/twitter-ceo-jack-dorsey-we-can-do-more-to-provide-algorithmic-transparency-190416046.html"/>    -->
                            <LinkPreview v-show="currentSlide === 2" key="slide2" linkUrl="https://techcrunch.com/2021/04/14/building-customer-first-relationships-in-a-privacy-first-world-is-critical/?guccounter=1"/>   
                        </transition>
                        <!-- <img-lazy key="slide4" :img-src="require('./Section2Slide/UI3.jpg')" background="background: transparent;" class="hiddenSlide"/> -->
                    </div>
                    <h2 class="SliderRightQuote"><font-awesome-icon icon="quote-right" style="color:red"/></h2>
                <!-- </div> -->
            </div>
            
        </div>
        <!-- <div class="row row2">
            <div class="col" style="align-items: center; gap: 1rem;">
                <span class="boldText" style="font-size: 1.2rem;">PROBLEMS ASSOCIATED WITH DECRYPTION</span>
                <div class="problems__Grid">
                    <div v-for="n in 4" :key="n">
                        <img-lazy img-src="https://img.icons8.com/ios-filled/100/000000/openvpn.png" background="background: transparent;" animateClass="fadeInUp"/>    
                        <span>Placeholder</span>
                    </div>             
                </div>
            </div>
        </div> -->
              
    </div>
</template>

<script>

import LinkPreview from './LinkPreview.vue'

export default {
    name: 'Section2',
    components: {
        LinkPreview
    },
    data() {
        return {
            currentSlide: 1
        }
    },
    mounted() {

        // Slide Changer
        setInterval(() => {
            if(this.currentSlide === 2)
                this.currentSlide = 1;
            else this.currentSlide++;
        }, 4000);

        // For animating elements on scroll
        let elements = this.$el.querySelectorAll(".anim_scroll");

        let config = {
          threshold: 0.9
        }

        const observer = new IntersectionObserver(([entry]) => {
            
            // entries.forEach(entry => {
                if(entry.isIntersecting){
                    console.log("intersecting!");
                    entry.target.style.animation = `${entry.target.dataset.animation} 1s forwards ease-out`
                }
                else {
                    console.log("not intersecting!");
                    entry.target.style.animation = 'none'
                }
            // })

      }, config);

      observer.POLL_INTERVAL = 100; // Time in milliseconds.

      elements.forEach(element => {
          observer.observe(element)
      })
    }
}
</script>

<style scoped>

.two > .row1 > .col1, .two > .row1 > .col2 {
      margin: 0 2.5rem;
  }  

  .two > .row1 > .col1 > h1,
    .two > .row1 > .col1 > span {
    text-align: center;
  }

  .two > .row1 > .col2 {
       margin-top: 1.5rem;
  }

  .col1 > p {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1rem;
      text-align: justify;
      margin: 0.5rem 0;
  }

  .problems__Grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 3rem;
  }

  .problems__Grid > div {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .problems__Grid > div > * {
    margin: 0.7rem 0;
  }

   .imageSlider {
      margin-top: 2rem;
      position: relative;
      text-align: center;
      height: 100vh;
    }

    .imageSlider .hiddenSlide {
        opacity: 0;
    }

    .SliderRightQuote {
        display:flex;
        justify-content: flex-end;
        margin-top: 2rem;
        width: 100%;
        position: absolute;
        bottom: 10%;
    }

@media only screen and (min-width: 768px){

    .imageSlider {
      text-align: center;
    }

    .col1 > p {
      font-size: 1.2rem;
      margin: 0.5rem 0;
    }

    .SliderRightQuote, .SliderLeftQuote {
        font-size: 2rem;
    }
/* 
    .two {
        display: flex;
        flex-direction: column;
        align-items: center;
    } */

    .two > .row1 {
        display: flex;
        height: 100%;
    }

    .two > .row1 > .col1 {
        flex-basis: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .two > .row1 > .col2 {
        flex-basis: 60%;
        order: 2;
        position: relative;
        margin-top: 0;
    }

    .two > .row1 > .col1 > h1,
    .two > .row1 > .col1 > span {
        text-align: left;
    }

    .problems__Grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 3rem;
    }
}
</style>