<template>
  <div class="app-select-field-demo">
    <app-select-field
    :label="'Selecciona una opción'"
    :shortLabel="'Selecciona una opción'"
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
                {
                    id: 1,
                    label: 'España'
                },
                {
                    id: 2,
                    label: 'Francia'
                },
                {
                    id: 3,
                    label: 'Italia'
                }
            ],
            selectValue: ''
        }
    }

}
</script>

<style>

</style>