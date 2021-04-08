<template>
    <div class="section two">
        <div class="row row1">
            <div class="col col1">
            <span class="boldText" style="font-size: 1.2rem;">THE CHALLENGE</span>
            <h1>How Data Ecosystems are broken today</h1>
            <p>Vast amounts of data stored by enterprises are inaccessible and un-monetized due to privacy concerns, operational complexity and regulations.</p>
            <p>Step 3 is where the trouble starts. Because the data must be replicated for use, a host of problems are introduced.</p>
            </div>
            <div class="col col2">
                <!-- <div class="ChallengeDiagramDIV"> -->
                    <!-- <div v-if="dataUrl" :style="{ background }" class="ChallengeDiagramPlaceHolder"></div> -->
                    <!-- <img id="ChallengeDiagramID" src="./ChallengeDiagramPlaceholder.png" class="ChallengeDiagram"/> -->
                    <img-lazy :img-src="require('./ChallengeDiagram.png')" background="background: transparent;" animateClass="pulse"/>
                <!-- </div> -->
            </div>
        </div>
        <div class="row row2">
            <div class="col" style="align-items: center; gap: 1rem;">
                <span class="boldText" style="font-size: 1.2rem;">PROBLEMS ASSOCIATED WITH DECRYPTION</span>
                <div class="problems__Grid">
                    <div v-for="n in 4" :key="n">
                        <img-lazy img-src="https://img.icons8.com/ios-filled/100/000000/openvpn.png" background="background: transparent;" animateClass="fadeInUp"/>    
                        <span>Placeholder</span>
                    </div>             
                </div>
            </div>
        </div>
              
    </div>
</template>

<script>

export default {
    name: 'Section2'
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

@media only screen and (min-width: 768px){
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
}
</style>