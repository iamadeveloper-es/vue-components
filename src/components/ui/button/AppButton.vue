<template>
  <button 
  class="app-button"
  :type="btnType"
  :disabled="disabled"
  @click="handleEvent($event)"
  >
      {{btnText}}
  </button>
</template>

<script>
export default {
    name: 'app-button',
    props: {
        btnText:{
            type: String
        },
        btnType:{
            type: String,
            default: 'button'
        },
        disabled:{
            type: Boolean,
            default: false
        }
    },
    methods:{
        handleEvent(ev){
            this.$emit('clicked', ev)
        }
    }
}
</script>

<style lang="scss" scoped>
.app-button{
    background-color: #2d86cf;
    color: white;
    display: inline-block;
    padding: 14px 10px;
    margin: 5px;
    border-radius: 3px;
    border: none;
    line-height: 1.4;
    text-align: center;
    cursor: pointer;
    &:hover{
        opacity: .9;
    }
}
</style>