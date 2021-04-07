<template>
  <div class="container">
      <span class="typedText">{{ typeValue }}</span>
      <span class="cursor" v-if="!finishedTyping">&nbsp;</span>
  </div>
</template>

<script>
export default {
    name: 'Typewriter',
    props: ['text', 'typingSpeed', 'delayTime'],
    data () {
        return {
            typeValue: '',
            charIndex: 0,
            finishedTyping: false
        }
    },
    methods: {
        typeText(){
            if(this.charIndex < this.text.length){
                this.typeValue += this.text.charAt(this.charIndex);
                this.charIndex++;
                setTimeout(this.typeText, this.typingSpeed);
            }
            else{
                this.finishedTyping  = true;
            }
        },
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    },
    async created() {
        if(this.delayTime){
           await this.sleep(this.delayTime);
        }
        
        setTimeout(this.typeText, this.typingSpeed);
    }
}
</script>

<style scoped>
.container {
    display: flex;
    height: fit-content;
    width: fit-content;
}
span.typedText {
    color: inherit;
    font-size: inherit;
}

span.cursor {
    margin-left: 3px;
    width: 2px;
    background-color: rgb(39, 39, 39);
    animation: cursorBlink 1s infinite;
}

@keyframes cursorBlink {
    0%, 49% {
        background-color: transparent;
    }
    50%, 100% {
        background-color: rgb(39, 39, 39);
    }
}
</style>