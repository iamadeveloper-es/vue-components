<template>
    <transition name="modal-fade">
        <div class="app-modal"
        ref="app-modal"
        @click="hide($event)"
        v-show="isModalVisible"
        >
            <div class="app-modal-content" data-dismiss="modal">
                <div class="app-modal-dialog">
                    <div class="app-modal-header">
                        <slot name="header"></slot>
                        <button
                        v-if="backDrop"
                        data-dismiss="modal"
                        @click="hide"
                        >
                            <span>&#x2715;</span>
                        </button>
                    </div>
                    <div class="app-modal-body">
                        <slot name="body"></slot>
                    </div>
                    <div class="app-modal-footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        backDrop: {
            type: Boolean,
            default: true
        }
    },
    mounted(){
        this.$emit('modal', this)
    },
    data () {
        return {
            isModalVisible: false
        }
    },
    methods: {
        show(){
            this.isModalVisible = true
        },
        hide(ev){
            if(ev.target.getAttribute('data-dismiss') === 'modal' && this.backDrop){
                this.isModalVisible = false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
//- modal styles
.app-modal{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    z-index: 999;
    button[data-dismiss="modal"] span{
        pointer-events: none;
    }
    .app-modal-content{
        background-color: rgba(54, 54, 54, .7);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .app-modal-dialog{
        max-width: 546px;
        background-color: var(--white);
        border-radius: 5px;
        box-shadow: 2px 2px 6px var(--black);
        overflow-y: scroll;
        max-height: calc(100vh - 10rem);
    }
    .app-modal-header, 
    .app-modal-body, 
    .app-modal-footer{
        padding: 15px 20px;
    }
    .app-modal-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
//- hide scrollbar
.app-modal-dialog::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}
.app-modal-dialog {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
//- transitions
.modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity .5s ease;
}
</style>