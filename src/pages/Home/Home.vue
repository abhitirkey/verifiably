<template>
   <div class="homepage outer-wrapper">
        <div class="inner-wrapper homepage-wrapper">
          <Section1 id="section1" ref="section1"/>
          <Section2 id="section2" ref="section2"/>
          <Section3 id="section3" ref="section3"/>
        </div>
    </div>
</template>

<script>

import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

export default {
  name: "Home",
  components: {
    Section1, Section2, Section3
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

  .one {
    background: linear-gradient(white , rgb(209, 209, 209));
  }

  .two, .four {
    background: linear-gradient(rgb(209, 209, 209) , white);
  }

  .three {
    background: white;
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

        .three {
          background: white;
        }

        .two, .four {
          background: linear-gradient(to right, rgb(209, 209, 209) , white);
        }
  }
</style>
