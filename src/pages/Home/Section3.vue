<template>
<div class="section three">
    <div class="col" style="align-items: center; width: 50%;">
        <img-lazy :img-src="require('./section_3_open_internet.png')" alt="" animateClass="fadeIn"/>
        <h1>Verifiably is the first transparency service for Web Apps.</h1>
        <p>We enable visibility into your app's algorithms and data access for end users, verifiable by anyone, trusted by everyone. All while building on popular cloud providers.</p>
        <p>Building verifiably means a gap-free audit trail and security first implementation that also minimizes the risk of internal and external security breaches.</p>
        <router-link to="/contact">Begin the Journey</router-link>
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
  color: gray;
  padding: 1rem;
  border-radius: 5px;
  text-transform: uppercase;
  border: none;
  box-shadow: 5px 5px 19px 0px #00000017;
  text-decoration: none;
  transition: 0.5s;
}

.three > .col > a:focus {
  outline: none;
}

.three > .col > a:active {
  box-shadow: none;
}

.three > .col > a:hover {
  transform: scale(1.2);
}

@media only screen and (min-width: 768px){
    .three > .col > img {
        width: 60%;
    }
}
</style>