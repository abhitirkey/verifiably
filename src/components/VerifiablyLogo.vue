<template>
    <div class="logo">
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
    .logo {
        position: relative;
        display: flex;
    }
</style>