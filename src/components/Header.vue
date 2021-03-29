<template>
    <nav>
        <VerifiablyLogo/>
        <div class="flex-spacer"/>
        <router-link to="/">Home</router-link> | 
        <router-link to="/contact">Contact</router-link>
    </nav>
</template>

<script>

import VerifiablyLogo from './VerifiablyLogo'

export default {
    name: 'Header',
    components: { VerifiablyLogo }
}
</script>

<style scoped>
    nav {
        display: flex;
        position: fixed;
        top: 0;
        height: 5rem;
        align-items: center;
        justify-content: space-between;
    }
</style>