<template>
  <div class="app-alert-demo">
      <app-alert
      :position="alertposition"
      ></app-alert>
      <app-button
      btnText="top-left"
      @clicked="alertToTopLeft()"
      ></app-button>
      <app-button
      btnText="top-right"
      @clicked="alertToTopRight()"
      ></app-button>
      <app-button
      btnText="bottom-left"
      @clicked="alertToBottomLeft()"
      ></app-button>
      <app-button
      btnText="bottom-right"
      @clicked="alertToBottomRight()"
      ></app-button>
  </div>
</template>

<script>
import AppButton from '../../button/AppButton.vue'
import AppAlert from '../AppAlert.vue'
export default {
  components: { AppAlert, AppButton },
  data () {
      return {
          alertposition: 'top-right'
      }
  },
  created(){
      this.showAlert()
  },
  methods: {
      showAlert(){
          const payload = {
              status: 'success',
              mssg: 'Esto es una alerta con la prop "position=top-right"'
          }
          this.$store.commit('showAlert', payload)
      },
      alertToTopLeft(){
          this.alertposition = 'top-left'
      },
      alertToTopRight(){
          this.alertposition = 'top-right'
      },
      alertToBottomLeft(){
          this.alertposition = 'bottom-left'
      },
      alertToBottomRight(){
          this.alertposition = 'bottom-right'
      }
  }

}
</script>

<style>

</style>