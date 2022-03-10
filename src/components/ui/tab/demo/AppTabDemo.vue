<template>
  <div class="app-tab-demo">
    <app-tab
    :options="navOptions"
    :itemSelected="blockSelected"
    @tabAction="setBlockSelected($event)"
    ></app-tab>
    <div class="hidden-blocks">
      <div
      v-if="blockSelected === 'block-first'"
      >{{ 'Bloque seleccionado: ' + blockSelected }}</div>
      <div
      v-if="blockSelected === 'block-second'"
      >{{ 'Bloque seleccionado: ' + blockSelected }}</div>
      <div
      v-if="blockSelected === 'block-third'"
      >{{ 'Bloque seleccionado: ' + blockSelected }}</div>
    </div>
  </div>
</template>

<script>
import AppTab from '../AppTab.vue'
export default {
    name: 'app-tab-demo',
    components: {
      AppTab
    },
    data() {
      return {
        navOptions: [
          {
            label: 'opción 1',
            action: 'block-first'
          },
          {
            label: 'opción 2',
            action: 'block-second'
          },
          {
            label: 'opción 3',
            action: 'block-third'
          }
        ],
        blockSelected: 'block-first'
      }
    },
    methods: {
      setBlockSelected(ev){
        this.blockSelected = ev
      }
    }
}
</script>

<style lang="scss" scoped>
.hidden-blocks{
  margin-top: 1rem;
  padding: 1rem;
  border: 2px solid var(--secondary-grey);
  border-radius: var(--radius-small);
}
</style>