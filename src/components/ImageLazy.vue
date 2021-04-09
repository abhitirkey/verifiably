<template>
<div class="fragment" style="width: fit-content;">
  <img
    :src="dataUrl"
    :alt="$attrs.alt || ''"
    :style="$attrs.style"
    :width="$attrs.width"
    :class="classes"
    v-bind="$attrs"
    class="AppImage"
  >
</div>
</template>

<script>

export default {
  name: 'ImageLazy',
  inheritAttrs: false,
  props: {
    imgSrc: {
        type: String,
        required: true,
    },
    classes: {
        type: String,
        default: null,
    },
    animateClass: {
        type: String,
        default: null
    }      
  },
  computed: {
    dataUrl() {
        const { width, height } = this.$attrs
        if( !width || !height) return ""

        // The following lines of code creates a placeholder for the intended image as it loads...
        const w = 100;
        const canvas = document.createElement('canvas')
        canvas.width = w;
        canvas.height = ( height / width ) * w;

        return canvas.toDataURL();


    }
  },
  mounted() {
      const { imgSrc, $el, animateClass, classes } = this;

      let config = {
          threshold: 0.9
      }

       const img = $el.querySelector('img')

      const observer = new IntersectionObserver(([entry]) => {
            
            if(entry.isIntersecting){
                if(animateClass){
                    img.classList.add('animate__animated');
                    img.classList.add('animate__'+animateClass);
                }
                if(classes){
                    img.classList.add(classes); 
                }
                img.src = imgSrc
                observer.disconnect();
            }

      }, config);

      observer.POLL_INTERVAL = 100; // Time in milliseconds.
      observer.observe(img)

      this.$once('hook:beforeDestroy', () => {
          observer.disconnect();
      })
  },
}
</script>

<style>
.AppImage {
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}
</style>