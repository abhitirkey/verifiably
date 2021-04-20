<template>
    <div class="contactPage__container">
        <div class="contactFormComponent">
            <div class="animate__animated animate__bounceInLeft">
                <p class="contactHeader">Let's get started. <font-awesome-icon icon="coffee" /></p>
            </div>
            <div v-if="step !== 4 && step > 0" class="formContainer fadeInForm" key="contactForm">
                    <!-- Conditional rendering for desktop or mobile -->
                    <div v-if="!isMobile()">
                        <span class="NavigationIconSpan" v-if="step > 1" @click="goBack()"><font-awesome-icon icon="caret-left"/></span>
                        <!-- <span class="NavigationIconSpan grayed" v-else-if="step === 1"><font-awesome-icon icon="caret-left" style="color: rgb(165, 165, 165);"/></span> -->
                    </div>
                    <div v-else>
                        <span class="NavigationIconSpan" v-if="step > 1" @click="goBack()"><font-awesome-icon icon="caret-up"/></span>
                        <!-- <span class="NavigationIconSpan grayed" v-else-if="step === 1"><font-awesome-icon icon="caret-up" style="color: rgb(165, 165, 165);"/></span> -->
                    </div>
                    
                    <!-- <div class="form"> -->
                        <transition appear v-on:after-enter="afterEnter" :duration="{ enter: 250, leave: 250 }" v-bind:enter-active-class="enterClasses" v-bind:leave-active-class="leaveClasses">
                            <div v-if="step === 1" class="input__group" key="step1">
                                <label for="contactField1">Your Name</label>
                                <input 
                                    ref="contactField1" 
                                    class="textField" 
                                    name="name" 
                                    :class="{'shakeField' : formData.shakeField}" 
                                    @animationend="formData.shakeField = false" 
                                    type="text" 
                                    v-model="formData.name" 
                                    placeholder="Type your name here" 
                                    v-on:input="fieldChangeHandler()"
                                    v-on:keyup.enter="goForward()"
                                    v-on:keyup.down="goForward()"
                                    focus
                                    />
                                <span v-if="!formData.fieldValid" class="invalidFieldMsg">{{formData.invalidMsg}}</span>
                            </div>
                            <div v-if="step === 2" class="input__group" key="step2">
                                <label for="contactField2">Your Email</label>
                                <input 
                                    ref="contactField2" 
                                    class="textField" 
                                    :class="{'shakeField' : formData.shakeField}" 
                                    @animationend="formData.shakeField = false" 
                                    type="email" 
                                    v-model="formData.email" 
                                    name="email" 
                                    placeholder="Type your email here" 
                                    v-on:input="fieldChangeHandler()"
                                    v-on:keyup.enter="goForward()"
                                    v-on:keyup.down="goForward()"
                                    v-on:keyup.up="goBack()"
                                />
                                <span v-if="!formData.fieldValid" class="invalidFieldMsg">{{formData.invalidMsg}}</span>
                            </div>
                            <div v-if="step === 3" class="input__group" key="step4">
                                <label for="contactField3">Your Message (optional)</label>
                                <textarea 
                                    ref="contactField3" 
                                    class="messageField" 
                                    :class="{'shakeField' : formData.shakeField}"
                                    @animationend="formData.shakeField = false"  
                                    v-model="formData.message" 
                                    name="message" 
                                    v-on:input="fieldChangeHandler()"
                                    v-on:keyup.enter="submitContactForm()"
                                    v-on:keyup.up="goBack()"
                                />
                                <span v-if="!formData.fieldValid" class="invalidFieldMsg">{{formData.invalidMsg}}</span>
                            </div>
                        </transition>
                    <!-- </div> -->
                    <span class="NavigationIconSpan" v-if="step < 3 && !isMobile()" @click="goForward()"><font-awesome-icon icon="caret-right"/></span>
                    <span class="NavigationIconSpan" v-else-if="step < 3" @click="goForward()"><font-awesome-icon icon="caret-down"/></span>
                    <span class="NavigationIconSpan" v-if="step === 3" @click="submitContactForm()"><font-awesome-icon icon="paper-plane"/></span>
            </div>
            <transition :duration="400" appear enter-active-class="animate__animated animate__zoomIn" leave-active-class="animate__animated animate__zoomOut">
                <div v-if="step === 4" class="messageStatus" key="sendStatus">
                    <transition :duration="400" mode="out-in" enter-active-class="animate__animated animate__zoomIn" leave-active-class="animate__animated animate__zoomOut">
                        <div v-if="!formSent" key="sending">
                            <h2 class="regularWeightText sendingForm TextCenter"> Please wait, sending form... </h2>
                        </div>
                        <div v-else key="sent">
                            <h2 class="regularWeightText TextCenter"> We received your message! :) </h2>
                            <h3 @click="resetForm()" class="animate__animated animate__lightSpeedInLeft delay reset_form TextCenter">Resend Message <font-awesome-icon icon="undo"/></h3>
                        </div>
                    </transition>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: "Contact",
    data () {
        return {
            formData: {
                name: '',
                email: '',
                message: '',
                fieldValid: true,
                shakeField: false,
                invalidMsg: ''
            },
            step: 1,
            formSent: false,
            enterClasses: 'animate__animated animate__fadeIn',
            leaveClasses: 'animate__animated animate__fadeOut'
        }
    },
    methods: {
        fieldChangeHandler: function(e) {
           e.preventDefault();
           let email_regx = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
           switch(this.step){
                case 1:
                    if(this.formData.name === ''){
                        this.formData.invalidMsg = '(This field cannot be blank)';
                        this.formData.fieldValid = false;
                    }
                    else{
                        this.formData.fieldValid = true;
                    }
                    break;
                case 2:
                    if(this.formData.email === ''){
                        this.formData.invalidMsg = '(This is a required field)';
                        this.formData.fieldValid = false;
                    }
                    else if(!this.formData.email.match(email_regx)){
                        this.formData.invalidMsg = '(Please enter a valid email address)';
                        this.formData.fieldValid = false;
                    }
                    else{
                        this.formData.fieldValid = true;
                    }
                    break;
            }
        },
        goBack() {
            if(!this.formData.fieldValid)
                this.formData.fieldValid = true;
            this.enterClasses = this.isMobile() ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeIn delay';
            this.leaveClasses = 'animate__animated animate__fadeOut';
            this.step -= 1;
        },
        goForward() {

            let email_regx = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            let valid = true;

            switch(this.step){
                case 1:
                    if(this.formData.name === ''){
                        this.formData.invalidMsg = '(This field cannot be blank)';
                        this.formData.fieldValid = false;
                        this.formData.shakeField = true; // Shake the input field if invalid
                        valid = false;
                    }
                    else{
                        this.formData.fieldValid = true;
                    }
                    break;
                case 2:
                    if(this.formData.email === ''){
                        this.formData.invalidMsg = '(This is a required field)';
                        this.formData.fieldValid = false;
                        this.formData.shakeField = true;
                        valid = false;
                    }
                    else if(!this.formData.email.match(email_regx)){
                        this.formData.invalidMsg = '(Please enter a valid email address)';
                        this.formData.fieldValid = false;
                        this.formData.shakeField = true;
                        valid = false;
                    }
                    else{
                        this.formData.fieldValid = true;
                    }
                    break;
            }

            if(valid){
                this.enterClasses = this.isMobile() ? 'animate__animated animate__fadeIn' : 'animate__animated animate__fadeIn delay';
                this.leaveClasses = 'animate__animated animate__fadeOut';
                this.step += 1;
            }
        },
        afterEnter: function () {
            this.$refs['contactField'+this.step].focus();
        },
        submitContactForm(){
            this.step = 4;
            if(this.formData.message === ""){
                this.formData.invalidMsg = '(Message field cannot be left blank)';
                this.formData.fieldValid = false;
                this.formData.shakeField = true; // Shake the input field if invalid
            }
            else {
                this.formData.fieldValid = true;

                const formData = this.formData;

                axios.get('https://qqt20956wc.execute-api.us-east-2.amazonaws.com/default/verifiably_contact_email', { params: formData })
                .then(response => {
                    this.formSent = true
                    console.log(response);
                }, error => {
                    this.formSent = true
                    console.log(error);
                })
            }
        },
        resetForm(){
            this.step = 1;
            this.formSent = false;
            this.formData.name = '';
            this.formData.email = '';
            this.formData.message = '';
            this.formData.fieldValid = true;
            this.formData.shakeField = false;
            this.formData.invalidMsg = '';
        }
    },
    mounted() {
        // setTimeout(() => this.step += 1, 100);
    }
}
</script>

<style scoped>

.contactPage__container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
}

.contactFormComponent {
    position: absolute;
    z-index: 10;
    height: 50%;
    width: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contactFormComponent > h1 {
    opacity: 0; /* To begin with, during fadeIn, initial opacity must be set to zero. */
    color: rgb(63, 63, 63);
    font-weight:100;
}

.formContainer {
    /* position: absolute; */
    position: relative;
    /* margin-top: 1rem; */
    height:75%;
    width: inherit;
    top: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow-x: hidden;
    overflow-y: hidden;
    opacity: 0;
}

.NavigationIconSpan {
    cursor: pointer;
    font-size: 2rem;
    text-align: center;
}

.form {
    position: relative;
}

.form:after {
    position: absolute;
    border-bottom: 1px solid gray;
}
.input__group {
    position: absolute;
    top: 30%;
    align-self: center;
    justify-self: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 90%;
}

.input__group > label {
    font-size: 1.3rem;
    font-weight: bolder;
    margin-bottom: 1rem;
}

.textField {
    font-size: 2rem;
    border: none;
    padding: 2px 20px;
    text-align: center;
    border: 1px solid transparent;
}
.textField:focus, .messageField:focus {
    outline: none;
}

.messageField {
    height: 10vh;
    font-size: 1.3rem;
    border: none;
    padding: 2px 10px;
    text-align: justify;
}

.grayed {
    color: rgb(165, 165, 165);
}

.delay {
  animation-delay: 0.5s;
}

.fadeInHeader {
    animation: fadeIn 1s;
    animation-fill-mode: forwards;
}

.fadeInForm {
    animation: fadeIn 1s;
    animation-fill-mode: forwards;
}

.shakeField {
    animation: shakeX 1s;
}

.invalidFieldMsg {
    font-size: 1.2rem;
    animation: flash 1s;
}


/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

/* Scrollbar styling */

::-webkit-scrollbar {
    width: 12px;
}
 
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.103); 
    border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.103); 
}

.contactHeader {
    letter-spacing: .15em;
    font-size: 2vw;
    font-weight: bolder;
}

.reset_form {
    margin: 1rem;
    color: rgb(99, 99, 99);
    text-align: center;
    font-size: 1.5rem;
}

.reset_form:hover {
    cursor: pointer;
    color: rgb(48, 48, 48);
}

.messageStatus {
    position: relative;
    top: 45%;
}

.sent > h3:hover {
    cursor: pointer;
}

.sendingForm {
    opacity: 1;
    animation: fadeInfadeOut 2s infinite;
}

@keyframes fadeInfadeOut {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}

@media only screen and (min-width: 768px){

    .input__group {
        width: 35%;
    }

    .typewriter p {
        font-size: 2rem;
    }

    .formContainer {
      flex-direction: row;
      height: 50%;
      justify-content: space-around;
    }
}
/* .formFieldEnterRight {
    animation: backInRight 1s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
}

.formFieldLeaveLeft {
    animation: backOutLeft 1s;
    animation-fill-mode: forwards;
}

@keyframes backInRight {
    0% {
        transform: scale(0.5);
        right: 0;
    }
    100% {
        transform: scale(1);
        right: -50%;
    }
}

@keyframes backOutLeft {
    0% {
        transform: scale(1);
        right: -50%;
    }
    100% {
        transform: scale(0.5);
        right: -100%;
    }
} */
</style>