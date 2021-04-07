<template>
    <div class="homepage outer-wrapper">
        <div class="inner-wrapper homepage-wrapper">
          <div class="slide one">
              <div class="slide1__textContainer">
                  <h1>Unlock Private Data Sharing.</h1>
                  <span>Enterprise Data Privacy as a service, TripleBlind is the HTTPS of private data sharing. Unlock new revenue opportunities while automatically enforcing compliance with GDPR, HIPAA and other privacy regulations.</span>
                  <button class="hollowBtn">Request a Demo</button>
              </div>
              <div class="slide1__imageContainer">
                  <img src="./open-government.png"/>
              </div>
          </div>
          <div class="slide two">
              <div class="row row1">
                  <div class="col col1">
                    <span class="boldText" style="font-size: 1.2rem;">THE CHALLENGE</span>
                    <h1>How Data Ecosystems are broken today</h1>
                    <p>Vast amounts of data stored by enterprises are inaccessible and un-monetized due to privacy concerns, operational complexity and regulations.</p>
                    <p>Step 3 is where the trouble starts. Because the data must be replicated for use, a host of problems are introduced.</p>
                  </div>
                  <div class="col col2">
                    <img :src="ChallengeDiagram" alt="ChallengeDiagram" class="ChallengeDiagram"/>
                  </div>
              </div>
              <div class="row row2">
                  <div class="col" style="align-items: center; gap: 1rem;">
                    <span class="boldText" style="font-size: 1.2rem;">PROBLEMS ASSOCIATED WITH DECRYPTION</span>
                    <div class="problems__Grid">
                      <div>
                          <img src="https://img.icons8.com/ios-filled/100/000000/openvpn.png"/>
                          <span>Placeholder</span>
                      </div>             
                      <div>
                          <img src="https://img.icons8.com/ios-filled/100/000000/openvpn.png"/>
                          <span>Placeholder</span>
                      </div>             
                      <div>
                          <img src="https://img.icons8.com/ios-filled/100/000000/openvpn.png"/>
                          <span>Placeholder</span>
                      </div>             
                      <div>
                          <img src="https://img.icons8.com/ios-filled/100/000000/openvpn.png"/>
                          <span>Placeholder</span>
                      </div>             
                    </div>
                </div>
              </div>
              
          </div>
          <div class="slide three">
            <div class="col" style="align-items: center; width: 50%;">
              <img src="./API@2x.png" alt="API" style="width: 100px;"/>
              <h1>TripleBlind is the fastest, most accurate and scalable privacy framework with the highest interoperability.</h1>
              <p>Our technology in your hands means that information assets (data and algorithms) are never decrypted, which will allow your organization to finally gain valuable insights from larger volumes of data without fear of privacy violations or IP theft.</p>
            </div>
          </div>
          <div class="slide four">
              <div class="col slide4__firstCol">
                <img src="./BankVendor@2x.png"/>
                <div style="text-align: justify; width: 80%;">
                    <span class="boldText">UNLOCK</span>
                    <h1>Private Financial Data Sharing</h1>
                    <p>Decryption kills the financial data economy, learn how TripleBlind can unlock liquidity and new partnership opportunities. See what we’re already doing for clients just like you.</p>
                </div>
                <button class="hollowBtn">Learn More</button>
              </div>
              <div class="col slide4__secondCol">
                <img src="./Healthcare@2x.png"/>
                <div style="text-align: justify; width: 80%;">
                    <span class="boldText">UNLOCK</span>
                    <h1>Private Data Sharing for AI in Healthcare</h1>
                    <p>AI in healthcare is highly complex. Today, collaborating around personal health information means it must be decrypted, making personal data vulnerable. TripleBlind can remove liability without restricting utility.</p>
                </div>
                <button class="hollowBtn">Learn More</button>
              </div>
          </div>
        </div>
    </div>
</template>

<script>

import ChallengeDiagram from './ChallengeDiagram.png'

export default {
  name: "Home",
  data: function() {
    return {
      ChallengeDiagram: ChallengeDiagram
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .one, .three {
    background: linear-gradient(white , rgb(209, 209, 209));
  }

  .two, .four {
    background: linear-gradient(rgb(209, 209, 209) , white);
  }
  
  .one {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding-top: 6rem;
  }

  .slide1__textContainer {
    order: 2;
    display: flex;
    flex-direction: column;
    padding: 1rem 4rem;
    align-items: center;
  }

  .slide1__textContainer > * {
    margin: 0.7rem 0;
  }

  .slide1__textContainer > h1 {
    font-size: 2rem;
    text-align: center;
  }

  .slide1__textContainer > span {
    font-size: 1.2rem;
    font-family:Arial, Helvetica, sans-serif;
    text-align: justify;
  }

  .slide1__textContainer > button {
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  .slide1__imageContainer {
      order: 1;
      text-align: center;
    }

  .slide1__imageContainer > img {
      width: 60%;
  }

  .two > .row1 > .col1, .two > .row1 > .col2 {
      margin: 0 2.5rem;
  }  

  .two > .row1 > .col1 > h1,
    .two > .row1 > .col1 > span {
    text-align: center;
  }

  .ChallengeDiagram {
    width: 100%;
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

  .three {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .three > .col > * {
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin: 1rem 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  .slide4__firstCol {
    flex-basis: 50%;
    background-color: rgb(209, 209, 209);
    height: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 5rem;
  }

  .slide4__secondCol {
    flex-basis: 50%;
    background-color: rgb(238, 238, 238);
    height: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 5rem;
  }

  @media only screen and (min-width: 768px){

        .inner-wrapper {
          /* Because of 4 slides each having with of 100vw */
          width: 400vw;
        }

        .one, .three {
          background: linear-gradient(to right,white , rgb(209, 209, 209));
        }

        .two, .four {
          background: linear-gradient(to right, rgb(209, 209, 209) , white);
        }

        .one {
          flex-direction: row;
        }

        .slide1__textContainer {
          order: 1;
          display: flex;
          flex-direction: column;
          flex-basis: 50%;
          height: 65%;
          justify-content: space-between;
          align-items: flex-start;
          padding: 5rem;
        }

        .slide1__textContainer > * {
          margin: 0.7rem 0;
        }

        .slide1__textContainer > h1 {
          font-size: 3rem;
          text-align: left;
        }

        .slide1__textContainer > span {
          font-size: 1.2rem;
        }

        .slide1__imageContainer {
          order: 2;
        }

        .slide1__imageContainer > img {
          width: 60%;
        }

        /* slide 1 classes end here */

        .two {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .two > .row1 > .col1 {
            flex-basis: 40%;
        }

        .two > .row1 > .col2 {
            flex-basis: 60%;
            order: 2;
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

         .four {
          display: flex;
        }
  }
</style>
