<template>
  <div class="section one">
        <div class="section1__textContainer">
            <h1>Customer security for startups</h1>
            <span>Verifiably provides automation and frameworks to make your customer security implementation <b>(Data Access, Privacy & Algorithm Fairness)</b> robust, easy and affordable.</span>
            <button class="hollowBtn" @click="scrollToNext">Learn More</button>
        </div>
        <div class="section1__imageContainer">
            <img-lazy :img-src="require('./TrustInABox.png')" alt="Establish trust, build verifiably." width="80%" />
        </div>
    </div>
</template>

<script>
import EventBus from '@/event-bus'

export default {
    name: 'Section1',
    methods: {
      scrollToNext(){
        EventBus.$emit('scrollToNext')
      }
    }
}
</script>

<style scoped>
.one {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 6rem;
  }

  .section1__textContainer {
    order: 2;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1rem 4rem;
    align-items: center;
    height: 100%;
  }

  .section1__textContainer > h1 {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  .section1__textContainer > span {
    font-size: 0.9rem;
    font-family:Arial, Helvetica, sans-serif;
    text-align: justify;
    margin-bottom: 0.5rem;
  }

  .section1__textContainer > button {
    margin-top: 1rem;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  .section1__imageContainer {
      order: 1;
      text-align: center;
      
    }

  .section1__imageContainer > img {
      width: 60%;
  }

  @media only screen and (min-width: 768px){
      .one {
          flex-direction: row;
        }

        .section1__textContainer {
          order: 1;
          display: flex;
          flex-direction: column;
          flex-basis: 50%;
          height: 65%;
          justify-content: space-between;
          align-items: flex-start;
          padding: 5rem;
        }

        .section1__textContainer > h1 {
          font-size: 3rem;
          text-align: left;
        }

        .section1__textContainer > span {
          font-size: 1.4rem;
          font-family: sans-serif;

        }

        .section1__imageContainer {
          order: 2;
        }

        .section1__imageContainer > img {
          width: 60%;
        }

  }
</style>