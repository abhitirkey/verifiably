<template>
<div class="section three" style="position: relative">
        <div class="col col1" style="width: 80%; align-items: center; width: 80%">
            <h1>Verifiably makes customer security easy and affordable</h1>
            <br/>
            <p>We understand that different startups need different levels of security and address this with a basic, better and best customer security approach.</p>
            <br/>
            <p>Basic covers continuous compliance, better is code only data access and gap-free audit trails and best is building customer security verifiably, i.e. in a way that is verifiable by the end user, a first.</p>
            <br/>
            <p>Early-stage startups, reach out to us for your customer security needs.</p>
            <router-link to="/contact" style="z-index: 1; font-weight: bold; font-size: 125%">Contact Us</router-link>
        </div>
        <div class="background-image">
            <img-lazy :img-src="require('./section_3_open_internet.png')" alt="" animateClass="fadeIn" style="width: 100%"/>
        </div>
</div>
</template>

<script>
export default {
    name: 'Section3'
}
</script>

<style scoped>

.three {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.three > .col > * {
    margin-bottom: 1rem;
}

.three > .col > img {
    width: 100%;
}

.three > .col > p {
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
}

.three > .col > a {
  background-color: transparent;
  color: rgb(65, 65, 65);
  padding: 1rem;
  border-radius: 5px;
  text-transform: uppercase;
  border: none;
  box-shadow: 5px 5px 19px 0px #00000017;
  text-decoration: none;
  transition: 0.5s;
  opacity: 0.9;
}

.three > .col > a:focus {
  outline: none;
}

.three > .col > a:active {
  box-shadow: none;
}

.three > .col > a:hover {
  opacity: 1;
  transform: scale(1.2);
}

.background-image {
    opacity: 0.15;
    top: 0; 
    bottom: 0; 
    right: 0; 
    position: absolute; 
    z-index: 0; 
    background-color: #625ea8; 
    width: 100%;
}

@media only screen and (min-width: 768px){
    .three > .col > img {
        width: 60%;
    }
}
</style>