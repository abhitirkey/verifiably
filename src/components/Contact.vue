<template>
    <div class="contactFormComponent">
        <h1 class="fadeInHeader">Let's get started.</h1>
        <div class="formContainer fadeInForm">
            <span v-if="step > 1" @click="goBack()">{{"Back"}}</span>
            <span v-if="step === 1" class="grayed">{{"Back"}}</span>
            <!-- <div class="form"> -->
                <transition v-on:after-enter="afterEnter" v-bind:enter-active-class="enterClasses" v-bind:leave-active-class="leaveClasses">
                    <div v-if="step === 1" class="input__group" key="step1">
                        <label for="contactField1">Your Name</label>
                        <input ref="contactField1" class="textField" type="text" v-model="name" autofocus/>
                    </div>
                    <div v-if="step === 2" class="input__group" key="step2">
                        <label for="contactField2">Your Email</label>
                        <input ref="contactField2" class="textField" type="text" v-model="email"/>
                    </div>
                    <div v-if="step === 3" class="input__group" key="step3">
                        <label for="contactField3">Your Contact Number</label>
                        <input ref="contactField3" class="textField" type="text" v-model="phone"/>
                    </div>
                    <div v-if="step === 4" class="input__group" key="step4">
                        <label for="contactField4">Your Message</label>
                        <textarea ref="contactField4" class="messageField" v-model="message"/>
                    </div>
                </transition>
            <!-- </div> -->
            <span v-if="step !== 4" @click="goForward()">{{"Forward"}}</span>
            <span v-if="step === 4" class="grayed">{{"Submit"}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contact",
    props: ["Journey"],
    data () {
        return {
            formData: {
                name: '',
                email: '',
                message: '',
                phone: ''
            },
            step: 1,
            enterClasses: 'animate__animated animate__backInRight delay',
            leaveClasses: 'animate__animated animate__backOutLeft'
        }
    },
    methods: {
        goBack() {
            this.enterClasses = 'animate__animated animate__backInLeft delay';
            this.leaveClasses = 'animate__animated animate__backOutRight';
            this.step -= 1;
        },
        goForward() {
            this.enterClasses = 'animate__animated animate__backInRight delay';
            this.leaveClasses = 'animate__animated animate__backOutLeft';
            this.step += 1;
        },
        afterEnter: function () {
            this.$refs['contactField'+this.step].focus();
        }
    },
    created() {
        this.$refs.contactField1.focus();
    },
}
</script>

<style scoped>
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
    position: absolute;
    height:10rem;
    width: inherit;
    top: 25%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow-x: hidden;
    overflow-y: hidden;
    opacity: 0;
}

.formContainer > span {
    cursor: pointer;
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
    animation-delay: 2s;
    animation-fill-mode: forwards;
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