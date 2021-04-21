<template>
  <div class="section one">
        <div class="section1__textContainer">
            <h1>Establish trust, <br/>build verifiably.</h1>
            <span>We enable data privacy and algorithm fairness of web apps via verifiable transparency of code and data access as a service.</span>
            <span>Establish customer trust while also having gap free audit trails for internal security.</span>
            <button class="hollowBtn" @click="scrollToNext">Learn More</button>
        </div>
        <div class="section1__imageContainer">
            <img-lazy :img-src="require('./TrustInABox.png')" :img-src-lazy="require('./TrustInABoxLQ.png')" alt="Establish trust, build verifiably." animateClass="bounceInDown"/>
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
      width: 60%;
    }

  .section1__imageContainer > img {
      animation: bounce 1s;
      animation-delay: 0.2s;
      animation-fill-mode: forwards;
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
          font-size: 1.2rem;
        }

        .section1__imageContainer {
          order: 2;
        }

        .section1__imageContainer > img {
          width: 60%;
        }

  }
</style>