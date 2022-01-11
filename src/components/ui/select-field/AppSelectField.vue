<template>
  <div 
  class="app-input-wrapper floating-label"
  :class="(isfloatingLabel && floatingLabel) || value ? 'is-focused' : ''"
  >
    <select
    class="app-input app-select-field"
    :id="inputRef"
    :name="inputRef"
    :aria-label="label"
    :required="required"
    v-model="computed_value"
    @input="$emit('input', $event.target.value)"
    @focus="floatingActive()"
    @blur="floatingRemove()"
    >
      <option disabled="true" selected="selected">{{ shortLabel }}</option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="getValue(option)"
      >
        {{ getLabel(option) }}
      </option>
    </select>
    <label :for="inputRef">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    inputRef: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    shortLabel: {
      type: String,
      default: "selecciona una opción",
    },
    options: {
      type: Array,
      required: true,
    },
    value: {
      default: "",
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
  computed: {
    computed_value: {
      get: function () {
        return this.value;
      },
      set: function (newValue) {
        this.$emit("input", newValue);
      },
    },
  },

  methods: {
    floatingActive(){
      this.isfloatingLabel = true
    },
    floatingRemove(){
      this.isfloatingLabel = false
    },
    getValue(obj) {
      if ("value" in obj) {
        return obj.value;
      } else {
        return obj[Object.keys(obj)[0]];
      }
    },
    getLabel(obj) {
      if ("label" in obj) {
        return obj.label;
      } else {
        return obj[Object.keys(obj)[1]];
      }
    },
  },
};
</script>

<style>
</style>