<template>
  <div class="app-select-field-demo">
    <app-select-field
    :floatingLabel="true"
    :options="options"
    v-model="selectValue"
    ></app-select-field>
    <div class="output mt-3" v-if="options">
        <span>{{selectValue}}</span>
    </div>
  </div>
</template>

<script>
import AppSelectField from '../AppSelectField.vue'
export default {
    name: 'app-select-field-demo',
    components: { AppSelectField },
    data(){
        return{
            options: [
                { label: 'Defaault', value: null },
                { label: 'España', value: 'espania' },
                // { label: 'Francia', value: 'francia', selected: true },
                { label: 'Rumanía', value: 'rumanía' },
                { label: 'Andorra', value: 'andorra' }
            ],
            selectValue: ''
        }
    }

}
</script>

<style>

</style>