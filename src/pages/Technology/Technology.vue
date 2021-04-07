<template>
  <div ref="technology" class="technology">
      <Section1/>
      <Section2/>
  </div>
</template>

<script>
import Section1 from './Section1'
import Section2 from './Section2'

export default {
    name: 'Technology',
    components: {
        Section1, Section2
    },
    created() {
        window.scrollTo(0, 0);
    }
}
</script>

<style scoped>
.section__container {
    height: 100vh;
    width: 100vw;
}
</style>