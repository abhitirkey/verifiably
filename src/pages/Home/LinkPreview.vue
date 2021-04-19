<template>
    <link-prevue :url="linkUrl">
        <template slot-scope="props">
            <div class="linkPreviewCard">
                <img class="card-img-top" :src="props.img" :alt="props.title" />
                <!-- <div class="card-block"> -->
                <h2 class="card-title">{{props.title}}</h2>
                <a v-bind:href="props.url">More</a>
                <!-- </div> -->
            </div>
    </template>
    </link-prevue>   
</template>

<script>
import LinkPrevue from "link-prevue";

export default {
    components: {
        LinkPrevue
    },
    props: {
        linkUrl: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
    .linkPreviewCard {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: absolute;
    }

    .linkPreviewCard > h2 {
        font-style: italic;
        width: 90%;
        margin: 1rem 0;
    }

    .linkPreviewCard > img {
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
        width: 90%;
    }

    .linkPreviewCard > a {
        padding: 0.5rem 2rem;
        opacity: 0.7;
        border-radius: 2rem;
        text-decoration: none;
        transition: 1s;
        -webkit-transition: 1s;
        -moz-transition: 1s;
        -ms-transition: 1s;
        -o-transition: 1s;
        font-size: 1rem;
        text-transform: uppercase;
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.274);
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .linkPreviewCard > a:hover {
        opacity: 1;
        transform: scale(1.1);
        box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.274);
    }

    @media only screen and (min-width: 768px) {
       .linkPreviewCard > h2 {
            width: 70%;
        }

        .linkPreviewCard > img {
            width: 60%;
        }
    }
</style>