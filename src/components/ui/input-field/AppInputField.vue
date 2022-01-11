<template>
  <div 
  class="app-input-wrapper floating-label"
  :class="(isfloatingLabel && floatingLabel) || value ? 'is-focused' : ''"
  >
    <input
    class="app-input app-input-field"
    :disabled="disabled"
    :type="inputType"
    :placeholder="placeholderLabel"
    :required="required"
    :readonly="readOnly"
    :aria-label="placeholderLabel || label"
    :name="inputRef"
    :id="inputRef"
    :value="value"
    @input="$emit('input', $event.target.value)"
    @focus="floatingActive()"
    @blur="floatingRemove()"
    />
    <label 
    class="app-label"
    :for="inputRef">{{ label }}</label>
  </div>
</template>
<script>
export default {
  name: 'app-input-field',
  props: {
    inputType: String,
    label: {
      type: String,
      default: "",
    },
    placeholderLabel: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    inputRef: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      required: true,
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
  methods:{
    floatingActive(){
      this.isfloatingLabel = true
    },
    floatingRemove(){
      this.isfloatingLabel = false
    }
  }
};
</script>
<style lang="scss" scoped>

.app-input-field[readonly] {
  cursor: no-drop;
}
</style>
