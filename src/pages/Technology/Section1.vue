<template>
    <div id="section1" class="section section1">
        <div class="section1__header">
            <h1 class="regularWeightText Privacy animate__animated animate__fadeInDown">Privacy</h1>
            <h1><Typewriter text="Built for Commerce." typingSpeed="100" delayTime="1500"/></h1>
        </div>
        
        <p class="section1__text animate__animated animate__fadeInUp">
            With TripleBlind, our next generation cryptographic technology enables companies to safely provide and consume sensitive data and algorithms without compromising privacy or security. The Blind Utilization Toolbox will allow companies to build new revenue streams from these underutilized datasets and algorithms, all the while complying with relevant privacy regulation.
        </p>
    </div>
</template>

<script>

import Typewriter from '@/components/Typewriter.vue'

export default {
    name: 'Section1',
    components: {
        Typewriter
    }
}
</script>

<style scoped>
.section1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 6rem;
}

.section1__header {
    margin-top: 2%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
}

.section1__header > h1:nth-child(1){
    animation-delay: 0.2s;
}

.section1__header > h1:nth-child(2){
    height: 2rem;
}


.section1__text {
    margin-top: 9%;
    width: 50%;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    justify-self: self-end;
    animation-delay:0.1s;
}

/* .delay {
    animation-delay: 0.5s;
} */
</style>