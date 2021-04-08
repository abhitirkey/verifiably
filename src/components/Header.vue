<template>
    <transition appear enter-active-class="animate__animated animate__backInDown">
    <nav>
        <router-link to="/home"><VerifiablyLogo/></router-link>
        <div class="nav_links_container">
            <router-link to="/technology">Technology</router-link> 
            <router-link to="/solutions">Solutions</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/contact">Contact</router-link>
            <router-link to="/news">News</router-link>
            <router-link to="/blog">Blog</router-link>
            <button class="unstyledButton" @click="showMobileMenu = true"><h1><font-awesome-icon icon="bars"/></h1></button>
        </div>
        <transition appear enter-active-class="animate__animated animate__fadeInDownBig" leave-active-class="animate__animated animate__fadeOutUpBig">
            <div ref="MobileMenu" class="MobileMenu" v-if="showMobileMenu">
                <span class="MenuClose" @click="showMobileMenu = false"><font-awesome-icon icon="times"/></span>
                <router-link to="/technology" class="MobileNavLink"><span @click="showMobileMenu = false">Technology</span></router-link> 
                <router-link to="/solutions" class="MobileNavLink"><span @click="showMobileMenu = false">Solutions</span></router-link>
                <router-link to="/about"><span @click="showMobileMenu = false">About</span></router-link>
                <router-link to="/contact"><span @click="showMobileMenu = false">Contact</span></router-link>
                <router-link to="/news"><span @click="showMobileMenu = false">News</span></router-link>
                <router-link to="/blog"><span @click="showMobileMenu = false">Blog</span></router-link>
            </div>
        </transition>
    </nav>
    </transition>
</template>

<script>

import VerifiablyLogo from './VerifiablyLogo'

export default {
    name: 'Header',
    components: { VerifiablyLogo },
    data() {
        return {
            showMobileMenu: false
        }
    }
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
        display: none;
    }

    .MobileMenu {
        position: absolute;
        top: 0;
        left: 0;
        width: 90vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        box-shadow: 1px 5px 5px 5px #00000012;
        background-color: white;
    }

    .MobileMenu > a {
        text-decoration: none;
        font-size: 1.2rem;
    }

    .MenuClose {
        position: absolute;
        top: 1.5rem;
        right: 2rem;
        font-size: 2rem;
        color: gray;
    }

    .MenuClose:hover {
        cursor: pointer;
    }

    @media only screen and (min-width: 768px) {
        
        .nav-links-container {
            display: block;
        }
        
        .nav_links_container >  a {
            display:initial;
            text-decoration: none;
            margin: 0 2rem;
            font-size: 1.2rem;
            /* font-weight: bold; */
            color: gray;
            mix-blend-mode: difference;
            background: transparent;
        }

        /* .nav_links_container > span:hover
        
        .nav_links_container > a:hover{
            transform: scale(1.5);
            -webkit-transform: scale(1.5);
        } */

        .nav_links_container > button {
            display: none;
        }
    }
</style>