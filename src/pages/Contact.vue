<template>
    <div class="contactPage__container">
        <div class="contactFormComponent">
            <div class="typewriter">
                <p class="contactHeader fadeInHeader">Let's get started. <font-awesome-icon icon="coffee" /></p>
            </div>
            <div class="formContainer fadeInForm">

                <!-- Conditional rendering for desktop or mobile -->
                <div v-if="!isMobile()">
                    <span class="NavigationIconSpan" v-if="step > 1" @click="goBack()"><font-awesome-icon icon="caret-left"/></span>
                    <span class="NavigationIconSpan grayed" v-else-if="step === 1"><font-awesome-icon icon="caret-left" style="color: rgb(165, 165, 165);"/></span>
                </div>
                <div v-else>
                    <span class="NavigationIconSpan" v-if="step > 1" @click="goBack()"><font-awesome-icon icon="caret-up"/></span>
                    <span class="NavigationIconSpan grayed" v-else-if="step === 1"><font-awesome-icon icon="caret-up" style="color: rgb(165, 165, 165);"/></span>
                </div>
                
                <!-- <div class="form"> -->
                    <transition appear v-on:after-enter="afterEnter" v-bind:enter-active-class="enterClasses" v-bind:leave-active-class="leaveClasses">
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
                        <div v-if="step === 3" class="input__group" key="step3">
                            <label for="contactField3">Your Contact Number</label>
                            <input 
                                ref="contactField3" 
                                class="textField" 
                                :class="{'shakeField' : formData.shakeField}"
                                @animationend="formData.shakeField = false"  
                                type="number" 
                                v-model="formData.phone" 
                                name="phone" 
                                placeholder="Type your number here" 
                                v-on:input="fieldChangeHandler()"
                                v-on:keyup.enter="goForward()"
                                v-on:keyup.down="goForward()"
                                v-on:keyup.up="goBack()"
                            />
                            <span v-if="!formData.fieldValid" class="invalidFieldMsg">{{formData.invalidMsg}}</span>
                        </div>
                        <div v-if="step === 4" class="input__group" key="step4">
                            <label for="contactField4">Your Message</label>
                            <textarea 
                                ref="contactField4" 
                                class="messageField" 
                                :class="{'shakeField' : formData.shakeField}"
                                @animationend="formData.shakeField = false"  
                                v-model="formData.message" 
                                name="message" 
                                placeholder="Type your message here" 
                                v-on:input="fieldChangeHandler()"
                                v-on:keyup.enter="goForward()"
                                v-on:keyup.up="goBack()"
                            />
                            <span v-if="!formData.fieldValid" class="invalidFieldMsg">{{formData.invalidMsg}}</span>
                        </div>
                    </transition>
                <!-- </div> -->
                <span class="NavigationIconSpan" v-if="step !== 4 && !isMobile()" @click="goForward()"><font-awesome-icon icon="caret-right"/></span>
                <span class="NavigationIconSpan" v-else @click="goForward()"><font-awesome-icon icon="caret-down"/></span>
                <span class="NavigationIconSpan" v-if="step === 4"><font-awesome-icon icon="paper-plane"/></span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Contact",
    data () {
        return {
            formData: {
                name: '',
                email: '',
                message: '',
                phone: '',
                fieldValid: true,
                shakeField: false,
                invalidMsg: ''
            },
            step: 1,
            enterClasses: 'animate__animated animate__backInRight delay',
            leaveClasses: 'animate__animated animate__backOutLeft'
        }
    },
    methods: {
        fieldChangeHandler: function(e) {
           e.preventDefault();
           alert(e.keyCode);
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
                        this.formData.invalidMsg = '(This is not a valid email address)';
                        this.formData.fieldValid = false;
                    }
                    else{
                        this.formData.fieldValid = true;
                    }
                    break;
                case 3:
                    if(this.formData.message === ''){
                        this.formData.invalidMsg = '(This is not a valid phone number)';
                        this.formData.fieldValid = false;
                    }
                    else{
                        this.formData.fieldValid = true;
                    }
                    break;
                case 4:
                    if(this.formData.message === ''){
                        this.formData.invalidMsg = '(This field cannot be left blank)';
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
            this.enterClasses = this.isMobile() ? 'animate__animated animate__fadeInDownBig' : 'animate__animated animate__backInRight delay';
            this.leaveClasses = this.isMobile() ? 'animate__animated animate__fadeOutDownBig' : 'animate__animated animate__backOutLeft';
            this.step -= 1;
        },
        goForward() {

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
                        this.formData.invalidMsg = '(This is not a valid email address)';
                        this.formData.fieldValid = false;
                        this.formData.shakeField = true;
                        valid = false;
                    }
                    else{
                        this.formData.fieldValid = true;
                    }
                    break;
                case 3:
                    if(this.formData.phone === ''){
                        this.formData.invalidMsg = '(This is not a valid phone number)';
                        this.formData.fieldValid = false;
                        this.formData.shakeField = true;
                        valid = false;
                    }
                    else{
                        this.formData.fieldValid = true;
                    }
                    break;
                case 4:
                    if(this.formData.message === ''){
                        this.formData.invalidMsg = '(This field cannot be left blank)';
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
                this.enterClasses = this.isMobile() ? 'animate__animated animate__fadeInUpBig' : 'animate__animated animate__backInRight delay';
                this.leaveClasses = this.isMobile() ? 'animate__animated animate__fadeOutUpBig' : 'animate__animated animate__backOutLeft';
                this.step += 1;
            }
        },
        afterEnter: function () {
            this.$refs['contactField'+this.step].focus();
        }
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
}

.input__group > label {
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
    font-size: 1rem;
    border: none;
    padding: 2px 20px;
    text-align: center;
}

.grayed {
    color: rgb(165, 165, 165);
}

.delay {
  animation-delay: 0.5s;
}

.fadeInHeader {
    animation: fadeIn 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
}

.fadeInForm {
    animation: fadeIn 1s;
    animation-delay: 2.5s;
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

.typewriter p{
  visibility: hidden;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid transparent; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  animation: 
    typing 1.5s steps(40, end),
    blink-caret .75s step-end;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}

.contactHeader {
    letter-spacing: .15em;
    font-size: 5vw;
    font-weight: bolder;
}

/* The typing effect */
/* @keyframes typing {
  from { width: 0; visibility: visible; }
  to { width: 100%; visibility: visible; }
} */

/* The typewriter cursor effect */
/* @keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: rgb(34, 34, 34); }
} */

/* For desktop view only */
@media only screen and (min-width: 768px){

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