<template>
  <div class="app-button-demo">
      <app-button
      :btnText="btnData.label"
      @clicked="counterIncrement($event)"
      ></app-button>
      <div class="mt-3">
          <span>{{`clicked ${clickedTimes} times`}}</span>
      </div>
  </div>
</template>

<script>
import AppButton from '../AppButton.vue'
export default {
  components: { AppButton },
    name: 'app-button-demo',
    data(){
        return{
            btnData:{
                label: 'I am a button',
            },
            clickedTimes: 0
        }
    },
    methods:{
        counterIncrement(){
            this.clickedTimes++
        }
    }
}
</script>

<style lang="scss" scoped>
.app-button{
    background-color: var(--primary-blue);
    color: white;
    display: inline-block;
    padding: 14px 10px;
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