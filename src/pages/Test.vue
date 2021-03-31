<template>
  <div class="fragment">
    <router-link to="/test1">page1</router-link> | 
    <router-link to="/test2">page2</router-link>
    <transition name="fade" mode="out-in">
        <router-view :key="$route.path" />
    </transition>
  </div>
</template>

<script>
export default {
    name: 'Test'
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>