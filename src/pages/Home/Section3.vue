<template>
<div class="section three">
    <div class="col" style="align-items: center; width: 50%;">
        <img-lazy :img-src="require('./API@2x.png')" alt="" width="100px" animateClass="bounceInDown"/>
        <h1>TripleBlind is the fastest, most accurate and scalable privacy framework with the highest interoperability.</h1>
        <p>Our technology in your hands means that information assets (data and algorithms) are never decrypted, which will allow your organization to finally gain valuable insights from larger volumes of data without fear of privacy violations or IP theft.</p>
    </div>
</div>
</template>

<script>
export default {
    name: 'Section3'
}
</script>

<style scoped>

.three {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.three > .col > * {
    margin-bottom: 1rem;
}
</style>