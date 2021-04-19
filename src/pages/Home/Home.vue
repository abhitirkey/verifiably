<template>
   <div class="homepage outer-wrapper">
        <div class="inner-wrapper homepage-wrapper">
          <Section1 id="section1" ref="section1"/>
          <Section2 id="section2" ref="section2"/>
          <Section3 id="section3" ref="section3"/>
          <Section4 id="section4" ref="section4"/>
        </div>
    </div>
</template>

<script>

import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'

// const Section1 = () => import(/* webpackChunkName: 'Section1' */ "./Section1.vue");
// const Section2 = () => import(/* webpackChunkName: 'Section2' */ "./Section2.vue");
// const Section3 = () => import(/* webpackChunkName: 'Section3' */ "./Section3.vue");
// const Section4 = () => import(/* webpackChunkName: 'Section4' */ "./Section4.vue");

export default {
  name: "Home",
  components: {
    Section1, Section2, Section3, Section4
  },
  created() {
        window.scrollTo(0, 0);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .section {
    padding-top: 7rem;
  }

  .one, .three {
    background: linear-gradient(white , rgb(209, 209, 209));
  }

  .two, .four {
    background: linear-gradient(rgb(209, 209, 209) , white);
  }

  p {
    font-size: 1.2rem;
    margin: 1rem 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  @media only screen and (min-width: 768px){

      .section {
        padding-top: 6rem;
      }


        .inner-wrapper {
          /* Because of 4 sections each having with of 100vw */
          width: 400vw;
        }

        .one, .three {
          background: linear-gradient(to right,white , rgb(209, 209, 209));
        }

        .two, .four {
          background: linear-gradient(to right, rgb(209, 209, 209) , white);
        }
  }
</style>
