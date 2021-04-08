<template>
  <div class="section one">
        <div class="section1__textContainer">
            <h1>Unlock Private Data Sharing.</h1>
            <span>Enterprise Data Privacy as a service, TripleBlind is the HTTPS of private data sharing. Unlock new revenue opportunities while automatically enforcing compliance with GDPR, HIPAA and other privacy regulations.</span>
            <button class="hollowBtn">Request a Demo</button>
        </div>
        <div class="section1__imageContainer">
            <!-- <img src="./open-government.png"/> -->
            <img-lazy :img-src="require('./open-government.png')" alt="Open Government" width="60%" animateClass="bounceInDown"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Section1'
}
</script>

<style scoped>
.one {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding-top: 6rem;
  }

  .section1__textContainer {
    order: 2;
    display: flex;
    flex-direction: column;
    padding: 1rem 4rem;
    align-items: center;
  }

  .section1__textContainer > * {
    margin: 0.7rem 0;
  }

  .section1__textContainer > h1 {
    font-size: 2rem;
    text-align: center;
  }

  .section1__textContainer > span {
    font-size: 1.2rem;
    font-family:Arial, Helvetica, sans-serif;
    text-align: justify;
  }

  .section1__textContainer > button {
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  .section1__imageContainer {
      order: 1;
      text-align: center;
      
    }

  .section1__imageContainer > img {
      width: 60%;
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

        .section1__textContainer > * {
          margin: 0.7rem 0;
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