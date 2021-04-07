<template>
  <div class="section four">
        <div class="col section4__firstCol">
            <img src="./BankVendor@2x.png"/>
            <div style="text-align: justify; width: 80%;">
                <span class="boldText">UNLOCK</span>
                <h1>Private Financial Data Sharing</h1>
                <p>Decryption kills the financial data economy, learn how TripleBlind can unlock liquidity and new partnership opportunities. See what we’re already doing for clients just like you.</p>
            </div>
            <button class="hollowBtn">Learn More</button>
        </div>
        <div class="col section4__secondCol">
            <img src="./Healthcare@2x.png"/>
            <div style="text-align: justify; width: 80%;">
                <span class="boldText">UNLOCK</span>
                <h1>Private Data Sharing for AI in Healthcare</h1>
                <p>AI in healthcare is highly complex. Today, collaborating around personal health information means it must be decrypted, making personal data vulnerable. TripleBlind can remove liability without restricting utility.</p>
            </div>
            <button class="hollowBtn">Learn More</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Section4'
}
</script>

<style scoped>
.section4__firstCol {
    flex-basis: 50%;
    background-color: rgb(209, 209, 209);
    height: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 5rem;
}

.section4__secondCol {
    flex-basis: 50%;
    background-color: rgb(238, 238, 238);
    height: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 5rem;
}

@media only screen and (min-width: 768px){
    .four {
          display: flex;
    }
}
</style>