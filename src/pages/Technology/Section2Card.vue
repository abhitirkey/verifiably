<template>
  <div class="section2__card">
      <img v-bind:src="imageSrc" v-bind:alt="title"/>
      <h2>{{title}}</h2>
      <p>{{text}}</p>
  </div>
</template>

<script>
export default {
    name: 'Section2Card',
    props: ['imageSrc', 'title', 'text'],
}
</script>

<style scoped>
    .section2__card {
        border-radius: 1rem;
        box-shadow: 5px 5px 5px 5px #00000017;
        padding: 1.5rem;
    }

    .section2__card > * {
        margin-top: 1rem;
    }
</style>