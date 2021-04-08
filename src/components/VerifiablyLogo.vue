<template>
    <div class="verifiably_logo">
        <LogoSVG/>
        <span class="erifiably">erifiably.</span>
    </div>
</template>

<script>
import LogoSVG from '../assets/verifiably_check.vue'

export default {
    name: 'VerifiablyLogo',
    components: { LogoSVG }
}
</script>

<style scoped>
    .verifiably_logo {
        position: relative;
        display: flex;
        transform: scale(0.6);
        transition: 0.5s;
    }

    .verifiably_logo:hover {
        transform: scale(0.65);
    }
    .verifiably_logo > .erifiably {
        position: absolute;
        top: 2.5rem;
        left: 5.7rem;
        font-size: 3.5rem;
        font-weight: bolder;
        color: #6e6e6e;
    }
</style>