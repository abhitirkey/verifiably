<script>
export default {
    name: 'ScrollButton',
    props: ['type', "sectionID"],
    data() {
        return {
           pointerClass: '',
           icon: ''
        }
    },
    created() {
        switch(this.type){
            case 'left':
                this.pointerClass = 'angleLeft';
                this.icon = <font-awesome-icon icon="angle-left"/>;
                break;
            case 'right':
                this.pointerClass = 'angleRight';
                this.icon = <font-awesome-icon icon="angle-right"/>;
                break;
            case 'top':
                this.pointerClass = 'angleTop';
                this.icon = <font-awesome-icon icon="angle-top"/>;
                break;
            case 'bottom':
                this.pointerClass = 'angleBottom';
                this.icon = <font-awesome-icon icon="angle-bottom"/>;
                break;
        }
    },
    render() {
        return (
             <span class={this.pointerClass+" scrollButton"}>{this.icon}</span>
        )
    }
}
</script>

<style scoped>
    span {
        display: none;
    }
    @media only screen and (min-width: 768px){
        span {
            display:initial;
            opacity: 0;
            visibility: hidden;
            position: fixed;
            height: fit-content;
            width: fit-content;
            font-size: 3rem;
            z-index: 100;
            animation: fadeInAndOut 2s;
            transition: 0.5s;
            padding: 2rem;
        }

        span > svg {
            color: gray;
        }

        @keyframes fadeInAndOut {
            0%, 50% {
                opacity: 0;
            }
            25%, 75% {
                opacity: 1;
            }
            100% {
                opacity:0;
            }
        }

        .visible {
            visibility:visible;
        }

        span:hover {
            cursor: pointer;
            opacity: 1;
            transform: scale(2);
        }

        .showScrollButton {
            opacity: 1;
        }

        .angleLeft {
            top: 50vh;
            left: 5vw;
        }

        .angleRight {
            top: 50vh;
            right: 5vw;
        }

        .angleTop {
            top: 1rem;
            left: 50vw;
        }
        .angleBottom {
            bottom: 1rem;
            left: 50vw;
        }
    }
    
</style>