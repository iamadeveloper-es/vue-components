<template>
  <div>
      <div class="app-info-component mb-6">
          <h1 class="mb-4">Componente</h1>
          <h2>{{setComponentName}}</h2>
      </div>
      <router-view/>
  </div>
</template>

<script>
export default {
    name: 'components-view',
    computed:{
        setComponentName(){
            const routeName = this.$route.name
            const componentName = routeName.substring(0, routeName.length - 4);
            return componentName
        }
    }
}
</script>

<style>

</style>