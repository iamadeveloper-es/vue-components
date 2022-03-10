<template>
    <transition name="modal-fade">
    <div class="app-alert"
    :class="[getAlert.status, position]"
    v-show="getAlert"
    >
        <div class="alert-content">
            <div class="alert-body">
                <span>{{getAlert.mssg}}</span>
            </div>
            <button
            class="alert-btn-close"
            @click="hide"
            >
                <span>&#x2715;</span>
            </button>
        </div>
    </div>
    </transition>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'app-alert',
    props: {
        position: {
            type: String,
            default: 'top-right'
        }
    },
    methods: {
        hide(){
            this.$store.commit('showAlert', false)
        },
    },
    computed:{
        ...mapGetters([
            'getAlert'
        ])
    }
}
</script>

<style lang="scss" scoped>
.app-alert{
    position: fixed;
    display: inline-block;
    border-radius: 5px;
    transition: opacity .2s ease-in-out;
    &:hover{
        opacity: .8;
    }
    &.top-left{
        top: 10px;
        left: 10px;
    }
    &.top-right{
        top: 10px;
        right: 10px;
    }
    &.bottom-left{
        bottom: 10px;
        left: 10px;
    }
    &.bottom-right{
        bottom: 10px;
        right: 10px;
    }
    &.success{
        background-color: var(--success);
        color: var(--white);
        border: 2px solid var(--success);
    }
    &.warning{
        background-color: var(--warning);
        color: var(--black);
        border: 2px solid var(--warning);
    }
    &.danger{
        background-color: var(--danger);
        color: var(--white);
        border: 2px solid var(--danger);
    }
    .alert-content{
        padding: 10px 15px;
        display: flex;
        justify-content: space-between;
    }
    .alert-btn-close{
            align-self: flex-start;
            margin-left: 10px;
    }
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