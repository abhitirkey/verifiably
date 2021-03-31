<template>
    <transition appear enter-active-class="animate__animated animate__fadeIn">
    <nav>
        <router-link to="/home"><VerifiablyLogo/></router-link>
        <div class="nav_links_container">
            <router-link to="/technology">Technology</router-link> 
            <router-link to="/solutions">Solutions</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/contact">Contact</router-link>
            <router-link to="/news">News</router-link>
            <router-link to="/blog">Blog</router-link>
        </div>
    </nav>
    </transition>
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
        height: 6rem;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 1rem 3rem;
        z-index: 100;
        background-color: rgba(255, 255, 255, 0.842);
    }

    .nav_links_container > a {
        text-decoration: none;
        margin: 0 2rem;
        font-size: 1.2rem;
        /* font-weight: bold; */
        color: gray;
        mix-blend-mode: difference;
        background: transparent;
    }
</style>