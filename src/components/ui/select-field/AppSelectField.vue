<template>
  <div 
  class="app-input-wrapper floating-label"
  :class="(isfloatingLabel && floatingLabel) || value ? 'is-focused' : ''"
  >
    <select 
    class="app-input app-input-field"
    :id="id"
    aria-label="Floating label select"
    @input="$emit('input', $event.target.value)"
    @focus="floatingActive()"
    @blur="floatingRemove()"
    @change="handleChange($event)"
    >
      <option
      class="option"
      v-for="(option, index) in options"
      :key="index"
      :value="option.value"
      :disabled="option.value === null ? true : false"
      :hidden="option.value === null ? true : false"
      :selected="option.selected || option.value === null">{{ option.label }}</option>
    </select>
    <label 
    :for="id">{{ selectLabel }}</label>
  </div>
</template>

<script>
export default {
  name: 'app-select-field',
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      default: ''
    },
    selectLabel: {
      type: String,
      default: 'Selecciona una opción'
    },
    id: {
      type: String,
      required: false,
      default: 'app-select'
    },
    selectClass: {
      type: Array,
      required: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    floatingLabel:{
      type: Boolean,
      default: false
    }
  },
  data(){
    return{
      isfloatingLabel: false,
      isLabel: false,
    }
  },
  methods: {
    floatingActive(){
      this.isfloatingLabel = true
    },
    floatingRemove(){
      this.isfloatingLabel = false
    },
    handleChange(ev){
      this.$emit('Change', ev)
    }
  }
};
</script>

<style>
</style>