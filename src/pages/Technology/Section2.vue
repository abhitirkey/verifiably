<template>
    <div id="section2" class="section__container section2">
        <div class="technology__grid">
            <Section2Card v-for="card in cards" :key="card.title" :imageSrc="card.imageSrc" :title="card.title" :text="card.text"/> 
        </div>
    </div>
</template>

<script>
import Section2Card from './Section2Card.vue'

export default {
    name: 'Section2',
    data() {
        return {
            cards: [
                {
                    imageSrc: './Section2Icons/Upload@2x.png',
                    title: 'Load Content As Is',
                    text: 'The platform encrypts all data during upload and allows users the option to encrypt their algorithms where IP protection is a concern.'
                },
                {
                    imageSrc: 'Section2Icons/DRM@2x.png',
                    title: 'DRM',
                    text: 'Digital Rights Management and auditability of every transaction allows suppliers to control specifically who, when, how often and for what purpose their assets are used. '
                },
                {
                    imageSrc: 'Section2Icons/Granularity@2x.png',
                    title: 'Granularity',
                    text: 'Algorithms running on the platform show improved accuracy due to higher degrees of granularity afforded by our encryption during execution process.'
                },
                {
                    imageSrc: 'Section2Icons/Leak@2x.png',
                    title: 'Leak Proof Operations',
                    text: 'Encryption ensures 3rd parties can’t access data specifics even while running operations against it. This breakthrough creates new data licensing opportunities previously unavailable.'
                },
                {
                    imageSrc: 'Section2Icons/Protection@2x.png',
                    title: 'IP Protection',
                    text: 'Complex algorithms are expensive to develop, and algorithm licensing could result in IP theft. Algorithm encryption allows you to securely capitalize on your investment.'
                },
                {
                    imageSrc: './Section2Icons/Discoverability@2x-1.png',
                    title: 'Discoverability',
                    text: 'The platform will allow researchers to discover datasets and algorithms that may have been previously unavailable, facilitating collaboration without sacrificing privacy.'
                },
            ]
        }
    },
    components: {
        Section2Card
    }
}
</script>

<style scoped>
.section2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.technology__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 100%;
}
</style>