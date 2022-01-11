<template>
  <div class="app-input-field-demo">
    <app-input-field
    :label="'Input field'"
    :floatingLabel="true"
    v-model="inputValue"
    ></app-input-field>
    <div class="output mt-3">
        <span>{{inputValue}}</span>
    </div>
  </div>
</template>

<script>
import AppInputField from '../AppInputField.vue'
export default {
    name: 'app-input-field-demo', 
    components: { AppInputField },
    data(){
        return{
            inputValue: ''
        }
    }

}
</script>

<style>

</style>