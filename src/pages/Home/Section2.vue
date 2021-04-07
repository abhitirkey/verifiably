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
                <img data-lazy="./ChallengeDiagram.png" alt="ChallengeDiagram" class="ChallengeDiagram"/>
            </div>
        </div>
        <div class="row row2">
            <div class="col" style="align-items: center; gap: 1rem;">
                <span class="boldText" style="font-size: 1.2rem;">PROBLEMS ASSOCIATED WITH DECRYPTION</span>
                <div class="problems__Grid">
                    <div>
                        <img data-lazy="https://img.icons8.com/ios-filled/100/000000/openvpn.png"/>
                        <span>Placeholder</span>
                    </div>             
                    <div>
                        <img data-lazy="https://img.icons8.com/ios-filled/100/000000/openvpn.png"/>
                        <span>Placeholder</span>
                    </div>             
                    <div>
                        <img data-lazy="https://img.icons8.com/ios-filled/100/000000/openvpn.png"/>
                        <span>Placeholder</span>
                    </div>             
                    <div>
                        <img data-lazy="https://img.icons8.com/ios-filled/100/000000/openvpn.png"/>
                        <span>Placeholder</span>
                    </div>             
                </div>
            </div>
        </div>
              
    </div>
</template>

<script>

// import ChallengeDiagram from './ChallengeDiagram.png'

export default {
    name: 'Section2',
    // components: { ChallengeDiagram },
    // data: function() {
    //     return {
    //         ChallengeDiagram: ChallengeDiagram
    //     }
    // }
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

  .ChallengeDiagram {
    width: 100%;
    animation: headShake 1s;
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