<template>
    <!-- <link-prevue :url="linkUrl">
        <template slot-scope="props"> -->
            <div class="linkPreviewCard">
                <img class="card-img-top" :src="imageUrl" :alt="title" />
                <span class="article-title"><strong>“</strong>{{title}}<strong>”</strong></span>
                <span class="article-author">{{author}}</span>
                <a v-bind:href="linkUrl" target="_blank">More</a>
            </div>
    <!-- </template>
    </link-prevue>    -->
</template>

<script>
// import LinkPrevue from "link-prevue";

export default {
    // components: {
    //     LinkPrevue
    // },
    props: {
        linkUrl: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true
        },
        author: {
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
        justify-content: center;
        align-items: center;
        position: absolute;
    }

    .linkPreviewCard > .article-title {
        font-style: italic;
        width: 90%;
        margin-top: 1rem;
        font-size: 1.3rem;
    }

    .article-title > strong {
        font-size: 2.2rem;
    }

    .linkPreviewCard > .article-author {
        width: 90%;
        margin: 1rem 0 1.5rem 0;
        font-weight: bolder;
        font-size: 1.3rem;
    }

    .linkPreviewCard > img {
        /* -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        /* filter: grayscale(100%); */
        width: 100%;
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

        .linkPreviewCard {
            height: 90vh;
        }

       .linkPreviewCard > span {
            width: 90%;
        }

        .linkPreviewCard > img {
            width: 70%;
        }
    }
</style>